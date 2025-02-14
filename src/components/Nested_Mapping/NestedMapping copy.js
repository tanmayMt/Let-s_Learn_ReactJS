import React from 'react';
import Data from './data'

export const NestedMapping = () => {
  return (
    <div>
      {Data.map((data)=>{
        const {id,name,age} = data;
        return(
          <div>
            ID: {id}
            <h2>Name: {name}</h2>
            <h6>Age: {age}</h6>
          </div>
        )
      })}
    </div>
  )
}
