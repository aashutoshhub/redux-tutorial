//video_08
import {ADD_TO_CART} from "../constants";

const initialState={
    cartData:[]
}

//action is pass internally without calling 
export default function cartItems(state=initialState,action) { 
    console.log("reducer data : ",action);
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartData:action.data,
            }
            break;
        default:
            return {
                ...state,
            }
    }
 }