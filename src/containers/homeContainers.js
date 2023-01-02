// connect is imported from react-redux to make communication between 
//react and redux
import {connect} from 'react-redux';
import Home from "../components/Home";  //home component
import {addToCart, removeToCart} from '../services/Actions/actions';  //action file of redux

//getting data(state) from redux store and sending 
const mapStateToPros=state=>({
    Data:state.cartItems,  //this data is coming from reducer state after return
})

//sending  data from components to redux store (in actions.js)
const mapDispatchToPros=dispatch=>({
    //addToCartHandler(data) is function which is called in react component with parameter data
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:()=>dispatch(removeToCart())  //bcz no any argument is taking
})

export default connect(mapStateToPros,mapDispatchToPros)(Home) ;