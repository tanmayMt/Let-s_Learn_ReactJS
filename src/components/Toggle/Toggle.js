import React from 'react'
import { useState } from 'react';

const Toggle = () => {
  const [toggle,setToggle] = useState(true);
  return (
    <div>
        
        <h>Toogle</h>
        {toggle &&(
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel ipsam
                error ex? Doloribus voluptatibus, esse et culpa ullam cum consequuntur
                aperiam alias sapiente! Itaque similique delectus fugit labore
                doloribus?
            </p>
            )
        }
        <div>
            <button
             onClick={()=>{
                setToggle(!toggle)
             }}
            >
             {toggle ? "Hide":"Show"}
            </button>
        </div>
    </div>
  )
}

export default Toggle
