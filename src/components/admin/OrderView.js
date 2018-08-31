import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { adminEditStatus, getOrders,  getAdminOrders} from '../../actions/adminActions';

class AdminOrderView extends Component{
    onClick = (e) => {
        e.preventDefault();
        this.props.userEditStatus(this.props.order.orderId);
        this.props.getOrders();
    }
    handleButtonToggle = (e) => {
        e.preventDefault();
        let status = {status: "delivered"};
        this.props.adminEditStatus(JSON.stringify(status), this.props.order.orderId);
        this.props.getAdminOrders();
        console.log('change')
    }
    viewStatus =(order)=>{
        if(order.status==="processing"){
            return <div id="delete-button" style={{padding:"0px"}}>
            <div className="add-btn" style={{"float":"left","border-radius": "2px",
    "width": "75.99px","padding": "0px 5px 0px 5px"}}><a style={{"color":"white"}}href="#" onClick={this.handleButtonToggle}>{order.status}</a></div>
    </div>
    
        }else if(order.status==="delivered"){
            return <div id="delete-button" style={{padding:"0px"}}>
            <div className="success-btn" style={{"float":"left","border-radius": "2px",
    "width": "75.99px","padding": "0px 5px 0px 5px"}}>{order.status}</div></div>
        }else if(order.status==="cancelled"){
            return <div id="delete-button" style={{padding:"0px"}}>
            <div className="del-btn" style={{"float":"left","border-radius": "2px",
    "width": "75.99px", "padding": "0px 5px 0px 5px"}}>{order.status}</div></div>
        }
    }
    render(){
        let order = this.props.order;
        return (
            <tbody>
            <tr>
                <td>{order.meal.name}</td>
                <td>{order.meal.price}</td>
                <td>{order.when}</td>
                <td>{order.menu_name}</td>
                <td>{order.customer.name}</td>
                <td>
                    <div className="flex-container" style={{"width": "75.99px"}}>
                        {this.viewStatus(order)}
                    </div>
                </td>
            </tr>
            </tbody>
        )
    }
}

AdminOrderView.propTypes = {
    order: PropTypes.object.isRequired,
    adminEditStatus: PropTypes.func.isRequired,
    getAdminOrders: PropTypes.func.isRequired
};

export default connect(null, { adminEditStatus, getAdminOrders })(AdminOrderView);