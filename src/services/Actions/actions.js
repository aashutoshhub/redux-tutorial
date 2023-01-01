

//video_07
import {ADD_TO_CART} from "../constants";

const addToCart=(data)=>{
    console.warn('data',data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export {addToCart};