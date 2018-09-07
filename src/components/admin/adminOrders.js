import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import OrderView from './OrderView';
// import { GetMeals, PostMeal } from '../../actions/adminActions';

class OrderList extends Component{
    states = {
        orders : [
        {
            'name':'Fries',
            'price':'10000',
            'time':'22:30:00'
        },
        {
            'name':'Beans and chips',
            'price':'6000',
            'time':'22:00:00'
        },
        {
            'name':'Beans and chips',
            'price':'3000',
            'time':'21:30:00'
        },
        {
            'name':'Chips',
            'price':'3000',
            'time':'21:30:00'
        },
        {
            'name':'Chicken Flakes',
            'price':'3000',
            'time':'21:30:00'
        },
        {
            'name':'Chicken Flakes',
            'price':'3000',
            'time':'21:30:00'
        },
        {
            'name':'Chicken Flakes',
            'price':'3000',
            'time':'21:30:00'
        }]
}
    render(){
        const orders = this.states.orders;
        let OrdersView =orders.map((order, index) => <OrderView order={order} key={index}/>); 
        return (
            <div>
                <div className="panel-body panel-meals">
                      <div className="content">
                        <table className="menu" >
                            {OrdersView}
                        </table>
                      </div>
                  </div>
                </div>
        )
    }
}

OrderList.propTypes = {
    admin:PropTypes.object,
    OrdersList: PropTypes.object.isRequired,
    GetMeals:PropTypes.func.isRequired
}

// const mapStateToProps = state =>({
// });


export default withRouter(connect(null,{})(OrderList));