import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminOrderView from './OrderView';
import { getAdminOrders } from '../../actions/adminActions';

class OrderList extends Component{
    componentDidMount(){
        // if (localStorage.getItem('access_token')===null){
        //     this.props.history.push("/login")
        // }
        this.props.getAdminOrders();
    }
    DisplayOrders= (OrderMeals) =>{
        if(OrderMeals){
        if(OrderMeals.Orders){
            console.log(OrderMeals.Orders);
            return OrderMeals.Orders.map((order, index) => {
                    return <AdminOrderView  order={order} key={index}/>});             
        }
        else if(OrderMeals.Orders===undefined){
            return <tbody><tr><td><div className = "panel-body" > Start by placing an order...</div></td></tr></tbody>;
        }else {
            OrderMeals.Orders.map((order, index) => {if(order.orderId!==null){return <AdminOrderView  order={order} key={index}/>}});}}}
    render(){
        const orders = this.props.adminOrders;
        return (
            <div>
                <div className="panel-body panel-meals">
                      <div className="content">
                        <table className="menu" >
                        {this.DisplayOrders(orders)}
                        </table>
                      </div>
                  </div>
                </div>
        )
    }
}

OrderList.propTypes = {
    adminOrders: PropTypes.object.isRequired,
    getAdminOrders: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    adminOrders: state.admin.adminOrders
});


export default withRouter(connect(mapStateToProps,{ getAdminOrders })(OrderList));