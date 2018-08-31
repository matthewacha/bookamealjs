import { ADD_MEAL,EDIT_MEAL, FETCH_MEALS, DELETE_MEAL, 
    ADD_TO_MENU, GET_MENU, GET_MEAL, DELETE_MENU_MEAL,
    GET_MENUS, GET_ACTIVE_MENU, SET_ACTIVE,ADD_NEW_MENU
    ,GET_CATERER, GET_CATERER_MENU, GET_ORDERS, MAKE_ORDER,
    ADMIN_GET_ORDERS } from '../actions/types';

const initialState ={
    mealsList:{Meals:[{warning: "Check your connection..."}]},
    mealMessage:{},
    deleteMessage:{},
    AddToMenuMessage:{},
    menuList:{Menu:[{warning:"Check your connection..."
    }]},
    Meal:{
        "Meal": {
            "name": "Beans",
            "price": 1000
        }
    },
    DeleteMenuMeal:{},
    menusList:{Menus:['None']},
    editMeal:{message:"None"},
    activeMenu:{},
    activeMenu:"None",
    newPendingMenu:{},
    caterers: undefined,
    catererMenu: undefined,
    makeOrder: undefined,
    userOrders: undefined,
    cart: undefined,
    adminOrders: undefined
};

export default (state=initialState, action)=>{
    switch(action.type){
        case ADD_MEAL:
            return {...state, mealMessage:action.message};
        case EDIT_MEAL:
            return {...state, editMeal:action.message};
        case DELETE_MEAL:
            return {...state, deleteMessage:action.message};
        case FETCH_MEALS:
            return {...state, mealsList:action.mealsList}
        case ADD_TO_MENU:
            return {...state, AddToMenuMessage:action.message}
        case ADD_NEW_MENU:
            return {...state, newPendingMenu:action.newMenuName}
        case GET_MENU:
            return {...state, menuList:action.payload}
        case GET_MEAL:
            return {...state, Meal:action.payload}
        case DELETE_MENU_MEAL:
            return {...state, DeleteMenuMeal:action.message}
        case GET_MENUS:
            return {...state, menusList:action.payload}
        case SET_ACTIVE:
            return {...state, menuState:action.payload}
        case GET_ACTIVE_MENU:
            return {...state, activeMenu:action.payload}
        case GET_CATERER:
            return {...state, caterers:action.caterers}
        case GET_CATERER_MENU:
            return {...state, catererMenu: action.catererMenu}
        case MAKE_ORDER:
            return {...state, makeOrder: action.message}
        case GET_ORDERS:
            return {...state, userOrders: action.userOrders}
        case ADMIN_GET_ORDERS:
            return {...state, adminOrders: action.Orders}
    default:
        return state

    }
}