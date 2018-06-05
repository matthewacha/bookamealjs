import { ADD_MEAL,EDIT_MEAL, FETCH_MEALS, DELETE_MEAL, 
    ADD_TO_MENU, GET_MENU, GET_MEAL, DELETE_MENU_MEAL,
    GET_MENUS } from '../actions/types';

const initialState ={
    mealsList:{Meals:[{id: 6, name: "pie", price: 100}]},
    mealMessage:{},
    deleteMessage:{},
    AddToMenuMessage:{},
    menuList:{Menu:[{
        'mealId':1,
        'price':'UGX 3000',
        'day':'21:30:00'
    }]},
    Meal:{
        "Meal": {
            "name": "Beans",
            "price": 1000
        }
    },
    DeleteMenuMeal:{},
    menusList:{Menus:['None']},
    editMeal:{message:"None"}
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
        console.log("LEmeals..");
            return {...state, mealsList:action.mealsList}
        case ADD_TO_MENU:
            return {...state, AddToMenuMessage:action.message}
        case GET_MENU:
            return {...state, menuList:action.payload}
        case GET_MEAL:
            return {...state, Meal:action.payload}
        case DELETE_MENU_MEAL:
            return {...state, DeleteMenuMeal:action.message}
        case GET_MENUS:
            return {...state, menusList:action.payload}
    default:
        return state

    }
}