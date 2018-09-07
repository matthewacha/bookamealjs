import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OrderView extends Component {
    render (){
        const order = this.props.order;
        return (
            
				<tr>
					<td>{order.name}</td>
					<td>{order.price}</td>
					<td>{order.time}</td>
					<td><button className="del-btn">del</button></td>

				</tr>
            
        )
    }
   

};

OrderView.propTypes = {
	order:PropTypes.object.isRequired
};

export default OrderView;



