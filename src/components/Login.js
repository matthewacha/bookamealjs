import React from 'react';
import './static/staticHome.css';
import { Checkbox, FormGroup} from 'react-bootstrap';
import {notify} from 'react-notify-toast';
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn, loginAdmin, signAdmin } from '../actions/credActions';
import { GetMeals } from '../actions/adminActions';

class Login extends React.Component{

	componentWillReceiveProps(recievedMessage){
		if(recievedMessage){
			if(recievedMessage.adminlog.message){
			// if login as caterer
				if (recievedMessage.adminlog.message){
					notify.show(recievedMessage.adminlog.message, 'error')
				}else if(recievedMessage.adminlog.token){
					localStorage.setItem('K_access_token', recievedMessage.adminlog.token);
					notify.show("Successfully logged in",'success')
					this.props.history.push("/adminDash");
				}
			}else{
				// if login as user
					if (recievedMessage.userlog.message){
						notify.show(recievedMessage.userlog.message, 'error')
					}else if(recievedMessage.userlog.token){
						notify.show("Successfully logged in",'success')
						this.props.history.push("/userDash");
					}
				}
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

	onSubmit = e =>{
		e.preventDefault();
		let credentials = {
			email: e.target.elements.email.value,
			password:e.target.elements.password.value,
			isadmin:e.target.elements.isadmin.checked};
		if(String(credentials.isadmin)==='true'){
			this.props.logIn(JSON.stringify(credentials))
			this.props.loginAdmin(JSON.stringify(credentials));
		}else{
			this.props.logIn(JSON.stringify(credentials))
		};
	}
  
	render(){
		return(
    <div>
        <nav>
		<div className="navibar">
			<ul>
				<li><a className="nav-log" href="Signup">Book-A-Meal</a></li>
				<li id="right-but"><a className="nav-logo" href="Signup">Signup</a></li>
			</ul>
	     </div>
	</nav>
	
	<div className = "background">
		<div className="input-forms">
			<div className="h2">
			<h2 id = "title">Login</h2>
			</div>
			<form onSubmit = { this.onSubmit }>
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
    </div>
)}
}

Login.propTypes = {
	loginAdmin:PropTypes.func.isRequired,
	logIn: PropTypes.func.isRequired,
	userlog: PropTypes.object.isRequired,
	adminlog: PropTypes.object.isRequired,
	GetMeals:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	userlog: state.user.loggedData,
	adminlog: state.user.adminData,
	GetMeals:PropTypes.func.isRequired
});

export default withRouter(connect(mapStateToProps, { logIn, loginAdmin, GetMeals} )(Login));