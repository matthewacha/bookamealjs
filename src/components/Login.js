import React from 'react';
import './static/staticHome.css';
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn } from '../actions/credActions';
import { signAdmin, loginAdmin, GetMeals } from '../actions/adminActions';

class Login extends React.Component{

	componentWillReceiveProps(loginMessage){
		if(loginMessage.userlog){
			// console.log(loginMessage.userlog.token);
			localStorage.setItem('access_token',loginMessage.userlog.token);
			// this.props.GetMeals();
			this.props.history.push("/userDash");
			//console.log(localStorage.getItem('access_token'));
			//this.props.signAdmin();//this is temporary just to debug admin dash,will be moved
			// localStorage.setItem('K_access_token',this.props.adminlog.token);
			// this.props.loginAdmin();
			// console.log(this.props);
			// console.log(localStorage.getItem('access_token'),localStorage.getItem('K_access_token'));
			//this.props.history.push("/adminSignup");
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
	signAdmin:PropTypes.func.isRequired,
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

export default withRouter(connect(mapStateToProps,{ logIn, signAdmin,loginAdmin, GetMeals} )(Login));