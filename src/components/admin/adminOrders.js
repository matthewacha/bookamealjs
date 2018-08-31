import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminOrderView from './OrderView';
import { getAdminOrders } from '../../actions/adminActions';
import { getTotal } from '../../utils/helper';

export class OrderList extends Component{
    componentDidMount(){
        if (localStorage.getItem('access_token')===null){
            this.props.history.push("/login")
        }
        this.props.getAdminOrders();
    }
    getTotals= (orders) =>{
        if(orders){
        if(orders.Orders){
        return getTotal(orders.Orders)}}
    }
    DisplayOrders= (OrderMeals) =>{
        if(OrderMeals){
        if(OrderMeals.Orders){
            return <tbody>{OrderMeals.Orders.map((order, index) => {
                    return <AdminOrderView  order={order} key={index}/>})}</tbody>;             
        }
        else if(OrderMeals.Orders===undefined){
            return <tbody><tr><td><div className = "panel-body" id="undefined" >Awaiting orders from your clients..</div></td></tr></tbody>;
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
                  <div className="panel-heading"><h3>Total: UGX {this.getTotals(orders)}</h3></div>
                </div>
        )
    }
}

OrderList.propTypes = {
    adminOrders: PropTypes.object,
    getAdminOrders: PropTypes.func.isRequired,

}

const mapStateToProps = state =>({
    adminOrders: state.admin.adminOrders
});


export default withRouter(connect(mapStateToProps,{ getAdminOrders, getTotal })(OrderList));