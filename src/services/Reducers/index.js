import {combineReducers} from 'redux';
import cardItems from './reducers';

//root reducers combine all the reducers in one file 
export default combineReducers({
    cardItems
});