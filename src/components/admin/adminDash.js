import React, { Component} from 'react';
import '../static/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery';
import '../static/staticCustDash.css'
import { Link, withRouter } from 'react-router-dom';
import { Modal, ModalManager } from 'react-dynamic-modal';
import MealList from './adminMeals';
import OrderList from './adminOrders';
import MenuList from './adminMenus';
import AdminSettingsModal from './adminSettingsModal'
import AdminMenuDropdown from './adminMenuDropdown';

class adminDash extends Component{
    openModal(){
        ModalManager.open(<AdminSettingsModal onRequestClose={() => true}/>);
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
						<li><a href="#"onClick={this.openModal}><span className="glyphicon glyphicon-cog" style={{"backgroundColor":"gray"}}></span></a></li>
						<li><a href="/login"><span className="glyphicon glyphicon-log-out"></span> Singout</a></li>
						</ul>
					</div>
				</nav>
                {/* <nav>
                    <div className="navibar">
                        <ul style={{"margin-top":"5px"}}>
                            <li className="nav-logo">Welcome, Admin!</li>
                            <li><a className="nav-logo" href="adminHistory">View History</a></li>
                            <li><a href="#"onClick={this.onAdminClick}><span className="glyphicon glyphicon-king"></span> Admin</a></li>
                            <li id = "right-but"><a className="nav-logo" href="login">Sign out</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
						<li><a href="#"onClick={this.onAdminClick}><span className="glyphicon glyphicon-king"></span> Admin</a></li>
						<li><a href="/login"><span className="glyphicon glyphicon-log-out"></span> Singout</a></li>
						</ul>
                    </div>
                </nav> */}
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
                <footer className="bg-darkest-gray" style={{"background-color":"black"}}>
                    <div className="container" style={{"margin-left": "0px","width":"100%","margin-right":"0px"}}>
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
                                <ul className="list-inline quicklinks" style={{"padding-left":"50%"}}>
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

export default adminDash;