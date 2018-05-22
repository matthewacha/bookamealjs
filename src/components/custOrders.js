import React, {Component} from 'react';
import OrderView from './custorderView';

export default class OrderList extends Component {
        state = {
                orders : [
                {
                    'name':'Fries',
                    'price':'UGX 10000',
                    'time':'22:30:00'
                },
                {
                    'name':'Beans and chips',
                    'price':'UGX 6000',
                    'time':'22:00:00'
                },
                {
                    'name':'Beans and chips',
                    'price':'UGX 3000',
                    'time':'21:30:00'
                }]
        }
    render () {
        let orders = this.state.orders
    let OrderViews = orders.map( function(order,index){return <OrderView key={index} order = {order}/>})
        return(
        <tbody>
            <tr>
                <th>Order</th>
                <th>Cost</th>
                <th>When</th>
                <th>Status</th>
            </tr>
            {OrderViews}
        </tbody>)
    }
}