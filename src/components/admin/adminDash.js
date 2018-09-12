import React, { Component} from 'react';
// import '../static/bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import '../static/staticCustDash.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ModalManager } from 'react-dynamic-modal';
import MealList from './adminMeals';
import OrderList from './adminOrders';
import MenuList from './adminMenus';
import AdminSettingsModal from './adminSettingsModal'
import AdminMenuDropdown from './adminMenuDropdown';
import bookMeal from '../../utils/store';
import { signOutUser } from '../../utils/helper';

export class AdminDash extends Component{
    signOut= (e) => {
        e.preventDefault();
        this.props.signOutUser;
        this.props.history.push('/login');
    }
    openModal(){
        ModalManager.open(<AdminSettingsModal store= {bookMeal} onRequestClose={() => true}/>);
     }
    render(){
        
        return (
            <div>
                <nav className="navbar navbar-inverse" style={{"marginBottom":"0px"}}>
					<div className="container-fluid">
						<div className="navbar-header">
						<Link to = "/login" className="navbar-brand">Book-A-Meal</Link>
						</div>
						<ul className="nav navbar-nav navbar-right navbar-header">
						<li><a href="#" id="settings" onClick={this.openModal}><span className="glyphicon glyphicon-cog"></span></a></li>
						<li><a href="#" id="signout"onClick={this.signOut}><span className="glyphicon glyphicon-log-out"></span> Singout</a></li>
						</ul>
					</div>
				</nav>
                <div >
                    <div className="flex-container" style = {{"marginBottom":"180px"}}>
                        
                        <div id = "flex-admin-meals" style={{"width":"33%"}}>
                            <div className="panel panel-default"  style={{"height":"100%"}}>
                                <div className="panel-heading" id ="meals-panel">
                                    Meal Options
                                </div>
                                <MealList/> 
                            </div>

                       
                        </div>
                        
                        
                        <div id="flex-admin-orders" style={{"width":"34%"}} >
                                <div className="panel panel-default" style={{"height":"100%"}}>
                                        <div className="panel-heading" id = "orders-panel">
                                            Orders
                                        </div>
                                        <OrderList/> 
                                </div>
                        </div>
                
                        <div id = "flex-admin-menu" style={{"width":"33%"}}>
                            <div className="panel panel-default"  style={{"height":"100%"}}>
                                    {<AdminMenuDropdown/>}
                                    {<MenuList/>} 
                            </div>
                        </div>
                    </div>
                    
                </div>
                <footer className="bg-darkest-gray" style={{"backgroundColor":"black"}}>
                    <div className="container" style={{"marginLeft": "0px","width":"100%","marginRight":"0px"}}>
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

AdminDash.propTypes = {
    signOutUser: PropTypes.func.isRequired,
}

export default connect(null,{ signOutUser })(AdminDash);