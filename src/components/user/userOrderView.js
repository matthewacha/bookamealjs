import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userEditStatus, getOrders } from '../../actions/adminActions';

class OrderView extends Component{
    onClick = (e) => {
        e.preventDefault();
        this.props.userEditStatus(this.props.order.orderId);
        this.props.getOrders();
    }
    viewStatus =(order)=>{
        if(order.status==="processing"){
            return <div id="delete-button" style={{padding:"0px"}}>
            <div className="add-btn" style={{"float":"left","border-radius": "2px",
    "width": "75.99px","padding": "0px 5px 0px 5px"}}>{order.status}</div>
    <div style={{"width": "91px"}}><a href="" onClick={this.onClick}>
    <span class="glyphicon glyphicon-remove"></span>
  </a></div></div>
    
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
                <td>{order.caterer}</td>
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

OrderView.propTypes = {
    order: PropTypes.object.isRequired,
    userEditStatus: PropTypes.func.isRequired,
    getOrders: PropTypes.func.isRequired
};

export default connect(null, { userEditStatus, getOrders })(OrderView);