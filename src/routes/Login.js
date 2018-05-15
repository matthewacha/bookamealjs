import React from 'react';
import './static/staticHome.css';

export default () => (
    <div>
        <nav>
		<div class="navibar">
			<ul>
				<li><a class="nav-logo" href="Signup">Book-A-Meal</a></li>
				<li id="right-but"><a class="nav-logo" href="Signup">Signup</a></li>
			</ul>
	     </div>
	</nav>
	
	<div class = "background">
		<div class="input-forms">
			<div class="h2">
			<h2>Login</h2>
			</div>
			<form action="admin-dash.html" href="customerHome.html">
				<div class="form-inputs">
					<div>
					  <label class="label">Email</label><br/>
					  <input type="email" class="form-control" placeholder="you@email.com" required/><br/><br/>
				      <label class="label">Password</label><br/>
					  <input type="password" class="form-control" placeholder="*********" required/><br/>
					</div><br/>
					<div>
					  <button class='submit-button' type="submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
	</div>
    </div>
);