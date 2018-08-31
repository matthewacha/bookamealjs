import { SIGN_USER, LOGIN_USER, ADMIN_LOGIN, ADMIN_SIGNUP } from '../actions/types';

const initialState = {
    signMessage:{},
    loggedData: {},
    adminSign:{},
    adminData: {}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case SIGN_USER:
            return {...state, 
            signMessage: action.payload}
        case LOGIN_USER:
            return {...state,
            loggedData: action.token}
        case ADMIN_SIGNUP:
            return {...state,
            adminSign: action.payload}
        case ADMIN_LOGIN:
            return {...state,
                adminData: action.token
            }
        default:
            return state;
    }
}