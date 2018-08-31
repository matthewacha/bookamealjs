import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserOrderView from './userOrderView';
import { getOrders } from '../../actions/adminActions';

class UserOrderList extends Component{
    componentDidMount(){
        // if (localStorage.getItem('access_token')===null){
        //     this.props.history.push("/login")
        // }
        this.props.getOrders();
    }
    DisplayOrders= (OrderMeals) =>{
        if(OrderMeals){
        if(OrderMeals.Orders){
            return OrderMeals.Orders.map((order, index) => {
                    return <UserOrderView  order={order} key={index}/>});             
        }
        else if(OrderMeals.Orders===undefined){
            return <tbody><tr><td><div className = "panel-body" > Start by placing an order...</div></td></tr></tbody>;
        }else {
            OrderMeals.Orders.map((order, index) => {if(order.orderId!==null){return <UserOrderView  order={order} key={index}/>}});}}}
    
    
    render(){
        const orders = this.props.userOrders;
        return (
            <div>
                <div className="panel-body panel-meals" style={{"height":"408px"}}>
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

UserOrderList.propTypes = {
    userOrders: PropTypes.object.isRequired,
    getOrders: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    userOrders: state.admin.userOrders
});


export default withRouter(connect(mapStateToProps,{ getOrders })(UserOrderList));