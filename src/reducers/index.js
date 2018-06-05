import { combineReducers} from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import helperReducers from './helperReducers';

const mainReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    helper:helperReducers
});

export default mainReducer;