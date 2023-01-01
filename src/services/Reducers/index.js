//combineReducers is used to combine all the reducers in one reducer 
import {combineReducers} from 'redux';  
import cartItems from './reducers';

export default combineReducers({
    cartItems, //all the reducers are included in it to combine
});