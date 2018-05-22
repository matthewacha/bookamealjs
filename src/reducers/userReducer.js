import { SIGN_USER, LOGIN_USER } from '../actions/types';

const initialState = {
    signMessage:{},
    loggedData:{}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case SIGN_USER:
            return {...state, 
            signMessage: action.payload}
        case LOGIN_USER:
            return {...state,
            loggedData: action.token}
        default:
            return state;
    }
}