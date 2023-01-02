import Header from "../components/Header";
import { connect, Connect } from "react-redux";


//store to components
const mapStateToPros=state=>({
    Data:state.cartItems,
})

const mapDispatchToPros=dispatch=>({
    
})

export default connect(mapStateToPros,mapDispatchToPros)(Header);