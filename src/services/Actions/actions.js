

//video_07  // action is used to collects data from react components
import {ADD_TO_CART, REMOVE_TO_CART} from "../constants";

const addToCart=(data)=>{

    console.warn('action data  : ',data);
   
    return{
        type:ADD_TO_CART,  //this type define that for which function the data collected in action
        data:data
    }
}

const removeToCart=()=>{

    console.warn("action");
   
    return{
        type:REMOVE_TO_CART, 
    }
}

export {addToCart,removeToCart};