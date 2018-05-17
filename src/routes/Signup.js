import React from 'react';
//import axios from 'axios';
import './static/staticHome.css';

export default class Signup extends React.Component{

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
			<form onSubmit = {this.props.signedUp}>
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

    </div>)
	}
}