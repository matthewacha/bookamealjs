import { SIGN_USER, LOGIN_USER } from './types';
import history from '../components/history';

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
       .then (data=> dispatch(
        {
            type: 'LOGIN_USER',
            token:data
        }
    ))
    
    }
}

export const redirectLogin = ()=>dispatch=>{
    //console.log(history.push("/login"));
    //dispatch(history.push('/login'));
    history.push('/login');
}

