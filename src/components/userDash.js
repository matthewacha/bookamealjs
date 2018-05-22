import React from 'react';
import './static/staticCustDash.css'
import OrderList from './custOrders';
import MenuList from './custMenu';

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
						<img src="prof_pic.jpg" className="img-circle" alt="" width="200" height="200"/>
					</div>
				</div>
				<div style={{width:200,}}>
				<table className="menu" >
				<tbody>
				<tr>
					<td>Pending orders </td>
					<td>2</td>

				</tr>
				</tbody>
			</table></div>
			
			</div>
	
			
			
			<div id = "caterer-flex">
				<table className="menu" >
						<MenuList/>
				</table>
			</div>
			
			
			<div id="orders-flex">
				<table className="menu" id = "orders-table" >
					<OrderList/>
				</table>
			</div>
		</div>
		</div>
		
	</div>

)