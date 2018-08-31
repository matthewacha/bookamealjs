import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { adminEditStatus, getAdminOrders} from '../../actions/adminActions';

export class AdminOrderView extends Component{
    // onClick = (e) => {
    //     e.preventDefault();
    //     this.props.userEditStatus(this.props.order.orderId);
    //     this.props.getOrders();
    // }

    handleButtonToggle = (e) => {
        e.preventDefault();
        let status = {status: "ready"};
        this.props.adminEditStatus(JSON.stringify(status), this.props.order.orderId);
        this.props.getAdminOrders();
    }

    viewStatus =(order)=>{
        if(order.status==="processing"){
            return <div id="delete-button" style={{padding:"0px"}}>
            <div className="add-btn" style={{"float":"left","borderRadius": "2px",
    "width": "75.99px","padding": "0px 5px 0px 5px"}}><a style={{"color":"white"}}href="#" onClick={this.handleButtonToggle}>{order.status}</a></div>
    </div>
        }else if(order.status==="delivered"){
            return <div id="delete-button" style={{padding:"0px"}}>
            <div className="success-btn" id="delivered" style={{"float":"left","borderRadius": "2px",
    "width": "75.99px","padding": "0px 5px 0px 5px"}}>{order.status}</div></div>
        }else if(order.status==="cancelled"){
            return <div id="delete-button" id="cancelled" style={{padding:"0px"}}>
            <div className="del-btn" style={{"float":"left","borderRadius": "2px",
    "width": "75.99px", "padding": "0px 5px 0px 5px"}}>{order.status}</div></div>
        } else if(order.status==="ready"){
            return <div id="delete-button" style={{padding:"0px"}}>
            <div className="ready-btn" id="ready" style={{"float":"left","borderRadius": "2px",
    "width": "75.99px","padding": "0px 5px 0px 5px"}}>{order.status}</div></div>
        }
    }
    render(){
        let order = this.props.order;
        return (
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
        )
    }
}

AdminOrderView.propTypes = {
    order: PropTypes.object.isRequired,
    adminEditStatus: PropTypes.func.isRequired,
    getAdminOrders: PropTypes.func.isRequired
};

export default connect(null, { adminEditStatus, getAdminOrders })(AdminOrderView);