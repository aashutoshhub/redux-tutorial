import React from "react";
import './Home.css';

const Header=(props)=>{
    console.warn("Header props",props.Data);
    // console.warn("Header props data ",props.Data[0]);
    return (
        <> 
          <div className="addToCart">
           <span>{props.Data.length}</span>
            <img  src='https://static.vecteezy.com/system/resources/thumbnails/007/227/569/small/add-to-cart-icon-design-illustration-vector.jpg' alt="add to cart image" />
          </div>  
        </>
    )
}

export default Header;