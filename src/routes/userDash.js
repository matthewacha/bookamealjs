import React from 'react';
import './static/staticCustDash.css'

export default () => (
    <div>
        <nav>
		<div class="navibar">
			<ul>
				<li class="nav-logo">Welcome, Alex!</li>
				<li><a class="nav-logo" href="customerHome">Home</a></li>
				
				<li id = "right-but"><a class="nav-logo" href="login">Sign out</a></li>
			</ul>
	     </div>
	</nav>
	<div >
		<div class="flex-container" id = "main-flex">
			
			
		
			<div class="flex-container inner" id="admin-flex">
				<div style={{height:200,}}>
					<div class = "profile-pic">
						<img src="prof_pic.jpg" class="img-circle" alt="no-image.png" width="200" height="200"/>
					</div>
				</div>
				<div style={{width:200,}}>
				<table class="menu" >
				<tr>
					<td>Pending orders </td>
					<td>2</td>

				</tr>
			</table></div>
			
			</div>
	
			
			
			<div id = "caterer-flex">
				<table class="menu" >
				<tr>
					<th>Java's Menu</th>
					<th>Price</th>
				</tr>
				<tr>
					<td>Fries</td>
					<td>UGX 5000 <button class="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>Beef with rice</td>
					<td>UGX 6500 <button class="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>French beans and rice</td>
					<td>UGX 5500 <button class="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>Beans and Chips</td>
					<td>UGX 3000 <button class="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>Fish Fingers</td>
					<td>UGX 10000 <button class="add-btn">add</button></td>
				</tr>
				</table>
			</div>
			
			
			<div id="orders-flex">
				<table class="menu" id = "orders-table" >
				<tr>
					<th>Order</th>
					<th>Cost</th>
					<th>When</th>
					<th>status</th>
				</tr>
				<tr>
					<td>Fries</td>
					<td>UGX 10000</td>
					<td>22:30:00</td>
					<td><button class="del-btn">del</button></td>

				</tr>
				<tr>
				    <td>Beans and Chips</td>
					<td>UGX 6000 </td>
					<td>22:00:00</td>
					<td><button class="del-btn">del</button></td>

				</tr>
				<tr>
				    <td>Beans and Chips</td>
					<td>UGX 3000 </td>
					<td>07:00:00</td>
					<td>done</td>

				</tr>
				
			</table></div>
		</div>
		</div>
		
	</div>

)