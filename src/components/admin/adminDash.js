import React, { Component} from 'react';
import '../static/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../static/staticCustDash.css'
import MealList from './adminMeals';
import OrderList from './adminOrders';
import MenuList from './adminMenus';
import AdminMenuDropdown from './adminMenuDropdown';

class adminDash extends Component{
    render(){
        
        return (
            <div>
                <nav>
                    <div className="navibar">
                        <ul>
                            <li className="nav-logo">Welcome, Admin!</li>
                            <li><a className="nav-logo" href="adminHistory">View History</a></li>
                            
                            <li id = "right-but"><a className="nav-logo" href="login">Sign out</a></li>
                        </ul>
                    </div>
                </nav>
                <div >
                    <div className="flex-container">
                        
                        <div id = "flex-admin-meals">
                            <div className="panel panel-default">
                                <div className="panel-heading" id ="meals-panel">
                                    Meal Options
                                </div>
                                <MealList/> 
                            </div>

                       
                        </div>
                        
                        
                        <div id="flex-admin-orders" >
                                <div className="panel panel-default">
                                        <div className="panel-heading" id = "orders-panel">
                                            Orders
                                        </div>
                                        <OrderList/> 
                                </div>
                        </div>
                
                        <div id = "flex-admin-menu">
                            <div className="panel panel-default">
                                    {<AdminMenuDropdown/>}
                                    {<MenuList/>} 
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default adminDash;