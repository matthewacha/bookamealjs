import React from 'react';
import './static/staticCustDash.css'
import OrderList from './custOrders';
import MenuList from './custMenu';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAdmin } from '../actions/adminActions';

class UserDash extends React.Component{
	componentWillReceiveProps(adminMessage){
		if(adminMessage.adminToken){
			// localStorage.setItem('K_access_token', adminMessage.adminToken.token)
			this.props.history.push("/adminDash");
			// console.log(adminMessage.adminToken.token);
			// console.log(localStorage.getItem('K_access_token'));
	}}
	componentDidMount=()=>{
		if (localStorage.getItem('access_token')===null){
			this.props.history.push("/login")
		}
	}
	onAdminClick=()=>{
		// console.log(localStorage.getItem('access_token'));
		this.props.loginAdmin();
		// console.log(localStorage.getItem('K_access_token'));
	}
	render (){
			return(
				<div>
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">
							<div className="navbar-header">
							<Link to = "/login" className="navbar-brand">Book-A-Meal</Link>
							</div>
							<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							</ul>
							<p className="navbar-text">Welcome Marcello</p>
							<ul className="nav navbar-nav navbar-right">
							<li><a href="#"onClick={this.onAdminClick}><span className="glyphicon glyphicon-king"></span> Admin</a></li>
							<li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Singout</a></li>
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
								<td>Pending orders{localStorage.getItem('access_token')} </td>
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
	}
}

UserDash.propTypes = {
	adminToken: PropTypes.object,
	loginAdmin: PropTypes.func.isRequired
}
const mapStateToProps= state =>({
	adminToken: state.user.adminData,
	loginAdmin: PropTypes.func.isRequired
});
export default  withRouter(connect(mapStateToProps,{ loginAdmin })(UserDash));