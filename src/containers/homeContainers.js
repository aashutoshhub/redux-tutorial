
//video_09

import Home from "../components/Home";
import {connect} from 'react-redux';
import {addToCart} from '../services/Actions/actions';


const mapStateToPros=state=>({

})

const mapDispatchToPros=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToPros,mapDispatchToPros)(Home)