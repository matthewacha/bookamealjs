import { SIGN_USER, LOGIN_USER, ADMIN_SIGNUP, ADMIN_LOGIN } from './types';
import history from '../utils/history';
import { notify } from 'react-notify-toast';

export const signUp=(signData)=>dispatch => {
    if (signData){

        const options = {
            method:'POST',
            body:signData, 
            headers:{
                'Content-Type':'application/json'}};
       return fetch(`http://127.0.0.1:5000/api/v2/auth/signup`,options)
       .then (result => result.json())
       .then (data=> dispatch(
        {
            type: SIGN_USER,
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
       return fetch(`http://127.0.0.1:5000/api/v2/auth/login`,options)
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

export const signAdmin = (signData) => dispatch=> {
    let options = {
        method: 'POST',
        body: signData,
        headers: {
            'Content-Type':'application/json'
                }
            }
        return fetch(`http://127.0.0.1:5000/api/v2/auth/admins`, options)
        .then(response=>response.json())
        .then(data=>dispatch({
            type: ADMIN_SIGNUP,
            payload: data
        })
    ) 
    
    }


export const loginAdmin = (loginData) => dispatch=> {
    let options = {
        method:'POST',
        body:loginData,
        headers: {
            'Content-Type':'application/json'
                }
            }
        return fetch(`http://127.0.0.1:5000/api/v2/auth/adminLogin`,options)
        .then(response=>response.json())
        .then(data=>{dispatch({
            type: ADMIN_LOGIN,
            token: data
        });
        if(data.token){
            localStorage.setItem('K_access_token', data.token);}}
    )
    
    }

    export const editAdminInfo = (signData) => dispatch=> {
        let options = {
            method: 'PUT',
            body: signData,
            headers: {
                'Content-Type':'application/json',
                'K_access_token':localStorage.getItem('K_access_token')

                    }
                }
            return fetch(`http://127.0.0.1:5000/api/v2/auth/manageAdmin`, options)
            .then(response=>response.json())
            .then(data=>dispatch({
                type: 'ADMIN_EDIT',
                payload: data
            })
        ) 
        
        }
    