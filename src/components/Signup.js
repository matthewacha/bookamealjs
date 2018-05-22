import React from 'react';
import './static/staticHome.css';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { signUp, redirectLogin } from '../actions/credActions';
import PropTypes from 'prop-types';
import history from './history'

class Signup extends React.Component{
	componentWillReceiveProps(singupMessage){
		if(singupMessage && singupMessage.user.message==="Successfully signed up"){
			console.log(singupMessage.user.message);
			this.props.history.push("/login");
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
			this.props.signUp(this.circularStringify(credentials));
	}


	render() {
			return (
				<div>
				<nav>
						<div className="navibar">
							<ul>
								<li><a className="nav-logo" href="Signup">Book-A-Meal</a></li>
								<li id="right-but" ><a className="nav-logo" href="Login">Login</a></li>
							</ul>
						</div>
				</nav>
				
				<div className = "background">
					<div className="input-forms">
						<div className="h2">
							<h2>Sign Up</h2>
						</div>
						<form onSubmit = {this.onSubmit}>
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

				</div>)}
	}

Signup.propTypes = {
	signUp:PropTypes.func.isRequired,
	redirectLogin:PropTypes.func.isRequired,
	user:PropTypes.object
}

const mapStateToProps = state => ({
	user: state.user.signMessage,
	redirectLogin:PropTypes.func.isRequired
});

export default withRouter(connect(mapStateToProps, {signUp, redirectLogin})(Signup));