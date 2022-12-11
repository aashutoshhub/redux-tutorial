import React from 'react';

//video_04 
const User=(props)=>{
    console.warn(props.data);
    const {data}=props;
    return(
        <>
            <h1>User component</h1>
            <h2>{data.name} {data.age}</h2>
        </>
    )
}

export default User;