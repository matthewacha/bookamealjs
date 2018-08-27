import { ADD_TO_CART, DELETE_FROM_CART } from '../../actions/types';
import { makeOrder } from '../../actions/adminActions';

export const addItemToCart = (cart, item) =>(dispatch)=> {
    if(cart==='undefined'){
        var cart = [];
    }
    var cartList = cart;
    cartList.push(item);
    dispatch({
        type: ADD_TO_CART,
        cart: cartList,
    })
}

export const deleteItemFromCart = (cart, item) =>(dispatch)=> {
    var cartList = cart;
    var index = cartList.indexOf(item);
    cartList.splice(index,1)
    dispatch({
        type: DELETE_FROM_CART,
        cart: cartList,
    })
}

export const makeMultipleOrders = (cart) => (dispatch) => {
    cart.forEach(order => {
        makeOrder(order.menuId, order.mealId)
    });
    cart.length = 0;
    dispatch({
        type: DELETE_FROM_CART,
        cart: cart,
    })
}