import React from 'react';
import 'jquery/dist/jquery';
import '../static/staticCustDash.css'
import UserOrderList from './userOrders';
import CatererMenu from './catererMenu';
import Caterers from './userCaterers';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAdmin, signAdmin } from '../../actions/credActions';
import { getCaterer } from '../../actions/adminActions';

class UserDash extends React.Component{

render (){
		return(
			<div>
				<nav className="navbar navbar-inverse" style={{"marginBottom":"0px"}}>
					<div className="container-fluid">
						<div className="navbar-header">
						<Link to = "/login" className="navbar-brand">Book-A-Meal</Link>
						</div>
						<ul className="nav navbar-nav">
	
						</ul>
						<p className="navbar-text">Welcome</p>
						<ul className="nav navbar-nav navbar-right">
						<li><a id ="signout" href="/login"><span className="glyphicon glyphicon-log-out"></span> Singout</a></li>
						</ul>
					</div>
				</nav>

			<div >
				<div className="flex-container" style = {{"marginBottom":"300px"}}>
					
					<div id = "flex-admin-meals" style={{"width":"33%"}}>
						<div className="panel panel-default">
							<div className="panel-heading" id ="meals-panel">
								Caterers
							</div>
							<Caterers/> 
						</div>

					
					</div>
			
					<div id = "flex-admin-menu" style={{"width":"34%"}}>
						<div className="panel panel-default">
								{<CatererMenu/>} 
						</div>
					</div>
					<div id="flex-admin-orders" style={{"width":"33%"}}>
						<div className="panel panel-default">
							<div className="panel-heading" id = "orders-panel">
								My orders
							</div>
									<UserOrderList/> 
						</div>
					</div>
				</div>
				
			</div>
			<footer className="bg-darkest-gray" style={{"backgroundColor":"black"}}>
				<div className="container" style={{"marginLEft": "0px","width":"100%","marginRight":"0px"}}>
					<div className="row">
						<div className="col-md-4">
							<ul className="list-inline quicklinks">
							<li><a href="#">Get in touch</a></li>
								<li><a href="#"></a></li>
							</ul>
						</div>
						<div className="col-md-4">
						
						</div>
						<div className="col-md-4">
							<ul className="list-inline quicklinks" style={{"paddingLeft":"50%"}}>
								<li><a href="#">About</a></li>

								<li><a href="#">Terms of service</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			
		</div>

		)
}
}

UserDash.propTypes = {
	adminToken: PropTypes.object,
	loginAdmin: PropTypes.func.isRequired,
	signAdmin: PropTypes.func.isRequired,
	getCaterer: PropTypes.func.isRequired
}
const mapStateToProps= state =>({
	adminToken: state.user.adminData,
	caterersList: state.admin.caterers,
	loginAdmin: PropTypes.func.isRequired,
	signAdmin: PropTypes.func.isRequired,
});
export default  withRouter(connect(mapStateToProps,{ loginAdmin, signAdmin, getCaterer })(UserDash));