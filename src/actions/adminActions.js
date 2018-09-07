import { ADD_MEAL, FETCH_MEALS, FETCH_ORDERS, FETCH_MENU, 
    ADMIN_LOGIN, ADMIN_SIGNUP, DELETE_MEAL, ADD_TO_MENU,
     GET_MENU, GET_MEAL,DELETE_MENU_MEAL, GET_MENUS, EDIT_MEAL } from './types';

export const PostMeal = (mealData) => dispatch=>{
    let options = {
        method:'POST',
        body:mealData,
        headers:{
            'content-type':'application/json',
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/meals/`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:ADD_MEAL,
            message:data
        }
    ))
}

export const EditMeal = (mealData,mealID) => dispatch=>{
    let options = {
        method:'PUT',
        body:mealData,
        headers:{
            'content-type':'application/json',
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/meals/${mealID}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:EDIT_MEAL,
            message:data
        }
    ))
}

export const DeleteMeal = mealId => dispatch=>{
    let options = {
        method:'DELETE',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/meals/${mealId}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:DELETE_MEAL,
            message:data
        }
    ))
}

export const DeleteMenuMeal = (mealId,menuName) => dispatch=>{
    let options = {
        method:'DELETE',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/menus/${menuName}/${mealId}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:DELETE_MENU_MEAL,
            message:data
        }
    ))
}
export const GetMeal = mealId => dispatch=>{
    let options = {
        method:'GET',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/meals/${mealId}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:GET_MEAL,
            payload:data
        }
    ))
}

export const AddToMenu = (mealId, MenuName) => dispatch=>{
    console.log('Menu adding..')
    let options = {
        method:'POST',
        body:MenuName,
        headers:{
            'content-type':'application/json',
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/menus/${mealId}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:ADD_TO_MENU,
            message:data
        }
    ))
}

export const GetMenu = MenuName => dispatch=>{
    console.log('Menu loaded..')
    let options = {
        method:'GET',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/menus/${MenuName}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:GET_MENU,
            payload:data
        }
    ))
}

export const GetMenus = () => dispatch=>{
    console.log('Menus loaded..')
    let options = {
        method:'GET',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/menus/`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:GET_MENUS,
            payload:data
        }
    ))
}
export const GetMeals = () => dispatch =>{
    console.log("fetching..")
    let options = {
        method:'GET',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`http://127.0.0.1:5000/api/v2/meals/`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:FETCH_MEALS,
            mealsList:data
        })
    )
}

export const signAdmin = () => dispatch=> {
    let options = {
        method:'POST',
        headers: {
            'access_token':localStorage.getItem('access_token')
                }
            }
        fetch(`http://127.0.0.1:5000/api/v2/auth/Admin`,options)
        .then(response=>response.json())
        .then(data=>dispatch({
            type:ADMIN_SIGNUP,
            message:data
        }))
    }


export const loginAdmin = () => dispatch=> {
    let options = {
        method:'POST',
        headers: {
            'access_token':localStorage.getItem('access_token')
                }
            }
        fetch(`http://127.0.0.1:5000/api/v2/auth/adminLogin`,options)
        .then(response=>response.json())
        .then(data=>{dispatch({
            type:ADMIN_LOGIN,
            token:data
        });localStorage.setItem('K_access_token', data.token)})
    
    }

