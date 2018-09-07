import React, { Component} from 'react';
import { connect } from 'react-redux';
import {notify} from 'react-notify-toast';
import PropTypes from 'prop-types';
import { makeOrder, getOrders } from '../../actions/adminActions';
import { addItemToCart } from './cartExtras';

class UserMenuView extends Component{
    componentWillMount=()=>{
        if (localStorage.getItem('access_token')===null){
            this.props.history.push("/login")
        }
    }
    
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
            <tbody>
            <tr>
                <td>{menuMeal.mealName}</td>
                <td>{menuMeal.mealPrice}</td>
                <td><a href="#" onClick={this.onClickOrder}>
                    <span class="glyphicon glyphicon-shopping-cart"></span>
                    </a>
                </td>
            </tr>
            </tbody>
        )
    }
}


UserMenuView.propTypes = {
    Meal: PropTypes.object.isRequired,
    makeOrder: PropTypes.func.isRequired,
    getOrders: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    GetMeal:PropTypes.func.isRequired,
    GetMenu:PropTypes.func.isRequired,
    Meal: state.admin.Meal,
    MealsList:state.admin.mealsList,
    menulist: state.admin.menuList,
    cart: state.admin.cart
});

export default connect(mapStateToProps, { makeOrder, getOrders, addItemToCart })(UserMenuView);