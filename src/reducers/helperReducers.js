import { EDIT_STATE } from '../actions/types';

const initialState = {
    editState: {status:false,
        mealId:"None",
        mealName:"None",
        mealPrice:"None"}
}

export default (state=initialState, action)=>{
    switch(action.type){
        case EDIT_STATE:
            return {...state, editState: action.state}
        default:
            return state;
    }
}