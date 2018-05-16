import React from 'react';
import './static/staticHome.css';

export default () => (
    <div>
    <nav>
			<div className="navibar">
				<ul>
					<li><a className="nav-logo" href="Signup">Book-A-Meal</a></li>
					<li id="right-but" ><a className="nav-logo" href="login">Login</a></li>
				</ul>
			</div>
	  </nav>
	
	<div className = "background">
		<div className="input-forms">
			<div className="h2">
			    <h2>Sign Up</h2>
			</div>
			<form action="propGoesHereToApi" href="login">
				<div className="form-inputs">
					<div>
					  <label className="label">Email</label><br/>
					  <input type="email" className="form-control" placeholder="you@email.com" required/><br/><br/>
				      <label className="label">Password</label><br/>
					  <input type="password" className="form-control" placeholder="*********" required/><br/>
					</div><br/>
					<div>
					  <button className='submit-button' type="submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
	</div>

    </div>
);