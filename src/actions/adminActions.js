import { ADD_MEAL, FETCH_MEALS, FETCH_ORDERS, FETCH_MENU, 
    ADMIN_LOGIN, ADMIN_SIGNUP, DELETE_MEAL, ADD_TO_MENU,
     GET_MENU, GET_MEAL,DELETE_MENU_MEAL, GET_MENUS,
      EDIT_MEAL,GET_ACTIVE_MENU, SET_ACTIVE, ADD_NEW_MENU } from './types';

export const PostMeal = (mealData) => dispatch=>{
    let options = {
        method:'POST',
        body:mealData,
        headers:{
            'content-type':'application/json',
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`/api/v2/meals/`, options)
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
        body: mealData,
        headers:{
            'content-type':'application/json',
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`/api/v2/meals/${mealID}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type: EDIT_MEAL,
            message: data
        }
    ))
}

export const DeleteMeal = mealId => dispatch=>{
    if(mealId!=='undefined'){
    let options = {
        method:'DELETE',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`/api/v2/meals/${mealId}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:DELETE_MEAL,
            message:data
        }
    ))}
}

export const DeleteMenuMeal = (mealId, menuName) => dispatch=>{
    let options = {
        method:'DELETE',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`/api/v2/menus/${menuName}/${mealId}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type: DELETE_MENU_MEAL,
            message: data
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
    fetch(`/api/v2/meals/${mealId}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:GET_MEAL,
            payload:data
        }
    ))
}

export const AddToMenu = (mealId, menuName) => dispatch=>{
    let options = {
        method:'POST',
        body:menuName,
        headers:{
            'content-type':'application/json',
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`/api/v2/menus/${mealId}`, options)
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
    fetch(`/api/v2/menus/${MenuName}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type: GET_MENU,
            payload: data
        }
    ))
}

// export const GetActiveMenu = () => dispatch=>{
//     console.log("Getting active")
//     let options = {
//         method:'GET',
//         headers:{
//             'K_access_token':localStorage.getItem('K_access_token')
//         }
//     }
//     fetch(`/api/v2/menu/`, options)
//     .then(response=>response.json())
//     .then(data=>dispatch(
//         {
//             type: GET_ACTIVE_MENU,
//             payload: data
//         }
//     ))
// }

export const ChangeMenuActive = (menuName, active) => dispatch=>{
    console.log("Getting active")
    let options = {
        method:'PUT',
        body:active,
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`/api/v2/menus/${menuName}`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type: SET_ACTIVE,
            payload: data
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
    fetch(`/api/v2/menus/`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type: GET_MENUS,
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
    fetch(`/api/v2/meals/`, options)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type:FETCH_MEALS,
            mealsList:data
        })
    )
}

export const AddNewMenu = (menuName) =>dispatch=>{
    let options = {
        method:'GET',
        headers:{
            'K_access_token':localStorage.getItem('K_access_token')
        }
    }
    fetch(`/api/v2/meals/`, options)
    .then(response=>response.json())
    .then(data => dispatch({
        type:ADD_NEW_MENU,
        newMenuName: menuName
    }));
}

