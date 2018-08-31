import React, { Component} from 'react';
import { connect } from 'react-redux';
import {notify} from 'react-notify-toast';
import PropTypes from 'prop-types';
import { makeOrder, getOrders } from '../../actions/adminActions';

export class UserMenuView extends Component{
    
    onClickOrder = (e) => {
        e.preventDefault();
        const menuMeal = this.props.menuMeal
        let menuId = menuMeal.id
        let mealId = menuMeal.mealId;
        this.props.makeOrder(menuId, mealId);
        this.props.getOrders();
    }
    
    render(){
        const menuMeal = this.props.menuMeal;

        return (
            <tr>
                <td>{menuMeal.mealName}</td>
                <td>{menuMeal.mealPrice}</td>
                <td><a href="#" onClick={this.onClickOrder}>
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    </a>
                </td>
            </tr>
        )
    }
}


UserMenuView.propTypes = {
    makeOrder: PropTypes.func.isRequired,
    getOrders: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    menulist: state.admin.menuList,
});

export default connect(mapStateToProps, { makeOrder, getOrders })(UserMenuView);