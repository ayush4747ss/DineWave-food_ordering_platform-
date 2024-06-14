import React, { useEffect } from 'react'
import { useState } from 'react'




const User = ({name}) => {
  const[count,setCount]=useState(0);
  const [count2]=useState(1);

  useEffect(()=>{

  },[]);
  

  return (
    <div className='user-card'>
        <h1>Count: {count}</h1>
        <h1>Count: {count2}</h1>
        <h3>Name: {name} </h3>
        <h4>Location: Paris </h4>
        <h4>Contact: shukla.ayush2001@gmail.com </h4>
       

    </div>

  )
}

export default User