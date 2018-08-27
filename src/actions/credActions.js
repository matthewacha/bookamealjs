import { SIGN_USER, LOGIN_USER, ADMIN_SIGNUP, ADMIN_LOGIN } from './types';
import history from '../utils/history';

export const signUp=(signData)=>dispatch => {
    if (signData){

        const options = {
            method:'POST',
            body:signData, 
            headers:{
                'Content-Type':'application/json'}};
       fetch(`http://127.0.0.1:5000/api/v2/auth/signup`,options)
       .then (result => result.json())
       .then (data=> dispatch(
        {
            type: 'SIGN_USER',
            payload:data
        }
    
    ))
    
    }
}

export const logIn=(loginData)=>dispatch => {
    if (loginData){
        const options = {
            method:'POST',
            body:loginData, 
            headers:{
                'Content-Type':'application/json'}};
       fetch(`http://127.0.0.1:5000/api/v2/auth/login`,options)
       .then (result => result.json())
       .then (data=> {dispatch(
        {
            type: LOGIN_USER,
            token:data
        }
    );if(data.token){
        localStorage.setItem('access_token', data.token)}});
        
    
    }
}

export const signAdmin = () => dispatch=> {
    console.log("Loging admin...")
    let options = {
        method:'POST',
        headers: {
            'access_token':localStorage.getItem('access_token')
                }
            }
        fetch(`/api/v2/auth/Admin`,options)
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
        fetch(`/api/v2/auth/adminLogin`,options)
        .then(response=>response.json())
        .then(data=>dispatch({
            type: ADMIN_LOGIN,
            token: data
        }))
    
    }