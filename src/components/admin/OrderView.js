import React, { Component} from 'react';
import PropTypes from 'prop-types';

class OrderView extends Component{
    render(){
        let order = this.props.order;
        return (
            <tbody>
            <tr>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.time}</td>
                <td>
                    <div className="flex-container">
                        <div id="delete-button" style={{padding:"10px 5px"}}><button className="del-btn" style={{float:"left"}}>done</button></div>
                    </div>
                </td>
            </tr>
            </tbody>
        )
    }
}

OrderView.propTypes = {
	order:PropTypes.object.isRequired
};
export default OrderView;