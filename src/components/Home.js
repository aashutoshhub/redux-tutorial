import React from "react";

const Home=()=>{
    return (
        <>
            <h1>Home component</h1>
            <div >
                <button>Add to cart</button>
            </div>
            <div className="card-wrapper">
              <div className="image-wrapper item">
                  <img src="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"/>
              </div>
              <div className="text-wrapper item">
                  <span>iphone</span>
                  <span>price : rs.120000</span>
              </div>
              <div className="btn-wrapper item">
                  <button>Add to cart</button>
              </div>
            </div>
        </>
    )
}

export default Home;