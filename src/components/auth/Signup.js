import React from 'react';
import '../static/staticHome.css';
import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
import { signUp, signAdmin } from '../../actions/credActions';
import PropTypes from 'prop-types';

class Signup extends React.Component{
componentWillReceiveProps(singupMessage){
	if(singupMessage){
	    if(singupMessage.admin.message){
		if (singupMessage.admin.message === 'User set to admin') {
			this.props.history.push("/login");
		} else {
			notify.show(singupMessage.admin.message, 'error')
		}
	};
	if(singupMessage.user.message){
	if(singupMessage.user.message==="Successfully signed up"){
				this.props.history.push("/login");
			} else {
				notify.show(singupMessage.user.message, 'error')};
	}};
};

	onSubmit = (e)=>{
		 e.preventDefault();
        let credentials = {
            email: e.target.elements.email.value,
			password: e.target.elements.password.value,
			isadmin: e.target.elements.isadmin.checked};
			if(String(credentials.isadmin)==='true'){
				this.props.signAdmin(JSON.stringify(credentials));
			}else{
				this.props.signUp(JSON.stringify(credentials));
			};
			
	}


	render() {
			return (
				<div>
				<nav>
						<div className="navibar">
							<ul>
								<li><a className="nav-log" href="Signup" style={{"padding-top":"0px"}}>Book-A-Meal</a></li>
								<li id="right-but" ><a className="nav-logo" href="Login">Login</a></li>
							</ul>
						</div>
				</nav>
				
				<div className = "background">
					<div className="input-forms">
						<div className="h2">
							<h2 id="title">Sign Up</h2>
						</div>
						<form onSubmit = {this.onSubmit}>
							<div className="forms-inputs">
								<div>
								<label className="label">Email</label><br/>
								<input type="email" name = "email" className="form-controls" placeholder="you@email.com" required/><br/><br/>
								<label className="label">Password</label><br/>
								<input type="password" name = "password" className="form-controls" placeholder="*********" required/><br/>
								<Checkbox style ={{"color":"white"}} name = "isadmin" inline>Caterer</Checkbox>
								</div><br/>
								<div>
								<button className='submit-button' type="submit">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>

				</div>)}
	}

Signup.propTypes = {
	signUp:PropTypes.func.isRequired,
	signAdmin: PropTypes.func.isRequired,
	user:PropTypes.object,
	admin: PropTypes.object
}

const mapStateToProps = state => ({
	user: state.user.signMessage,
	admin: state.user.adminSign
});

export default withRouter(connect(mapStateToProps, { signUp, signAdmin })(Signup));