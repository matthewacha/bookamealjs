import React from 'react';
import './static/staticCustDash.css'
import OrderList from './custOrders';

export default () => (
    <div>
        <nav>
		<div className="navibar">
			<ul>
				<li className="nav-logo">Welcome, Alex!</li>
				<li><a className="nav-logo" href="customerHome">Home</a></li>
				
				<li id = "right-but"><a className="nav-logo" href="login">Sign out</a></li>
			</ul>
	     </div>
	</nav>
	<div >
		<div className="flex-container" id = "main-flex">
			
			
		
			<div className="flex-container inner" id="admin-flex">
				<div style={{height:200,}}>
					<div className = "profile-pic">
						<img src="prof_pic.jpg" className="img-circle" alt="no-image.png" width="200" height="200"/>
					</div>
				</div>
				<div style={{width:200,}}>
				<table className="menu" >
				<tr>
					<td>Pending orders </td>
					<td>2</td>

				</tr>
			</table></div>
			
			</div>
	
			
			
			<div id = "caterer-flex">
				<table className="menu" >
				<tr>
					<th>Java's Menu</th>
					<th>Price</th>
				</tr>
				<tr>
					<td>Fries</td>
					<td>UGX 5000 <button className="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>Beef with rice</td>
					<td>UGX 6500 <button className="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>French beans and rice</td>
					<td>UGX 5500 <button className="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>Beans and Chips</td>
					<td>UGX 3000 <button className="add-btn">add</button></td>
				</tr>
				
				<tr>
					<td>Fish Fingers</td>
					<td>UGX 10000 <button className="add-btn">add</button></td>
				</tr>
				</table>
			</div>
			
			
			<div id="orders-flex">
			<table className="menu" id = "orders-table" >
				<tr>
					<th>Order</th>
					<th>Cost</th>
					<th>When</th>
					<th>Status</th>
				</tr>
					<OrderList/>
				</table>
			</div>
		</div>
		</div>
		
	</div>

)