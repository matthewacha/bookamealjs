import React from 'react';
import './static/staticHome.css';
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { logIn } from '../actions/credActions';
import  bookMeal  from '../store';

class Login extends React.Component{

	componentWillReceiveProps(loginMessage){
		if(loginMessage.userlog){
			localStorage.setItem('access_token',loginMessage.userlog.token);
			this.props.history.push("/userDash");
		}
	};

	circularStringify = (object) =>{
		let simpleObj={};
				for (let prop in object){
						if (!object.hasOwnProperty(prop)){
								continue;
						}
						if (typeof(object[prop]) === 'object'){
								continue;
						}
						simpleObj[prop] = object[prop];
				}
				return JSON.stringify(simpleObj)

	}

	onSubmit = (e)=>{
		e.preventDefault();
		let credentials = {
			email: e.target.elements.email.value,
			password:e.target.elements.password.value};
			this.props.logIn(this.circularStringify(credentials));
	}
	render(){
		return(
    <div>
        <nav>
		<div className="navibar">
			<ul>
				<li><a className="nav-logo" href="Signup">Book-A-Meal</a></li>
				<li id="right-but"><a className="nav-logo" href="Signup">Signup</a></li>
			</ul>
	     </div>
	</nav>
	
	<div className = "background">
		<div className="input-forms">
			<div className="h2">
			<h2>Login</h2>
			</div>
			<form onSubmit = { this.onSubmit }>
				<div className="form-inputs">
					<div>
					  <label className="label">Email</label><br/>
					  <input type="email" name = "email" className="form-control" placeholder="you@email.com" required/><br/><br/>
				      <label className="label">Password</label><br/>
					  <input type="password" name = "password" className="form-control" placeholder="*********" required/><br/>
					</div><br/>
					<div>
					  <button className='submit-button' type="submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
	</div>
    </div>
)}
}

Login.propTypes = {
	logIn: PropTypes.func.isRequired,
	userlog: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	userlog: state.user.loggedData
});

export default withRouter(connect(mapStateToProps,{ logIn} )(Login));