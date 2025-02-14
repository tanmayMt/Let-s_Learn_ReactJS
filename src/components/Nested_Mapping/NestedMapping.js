import React from 'react';
import Data from './data'

export const NestedMapping = () => {
  return (
    <div>
      {Data.map((data)=>{
        const {id,Name,Age} = data;
        return(
          <div key={id}>
            <h4>ID: {id}</h4>
            <h3>Name: {Name}</h3>
            <h3>Age: {Age}</h3>
            {data.Phone.map((phone,index)=>{
               const {home,office}=phone;
               return(
                <div key={index}>
                    <p>Home: {home}</p>
                    <p>Office: {office}</p>
                </div>
                )
            })}
            ------------------------------------------------------<br/>
          </div>
        )
      })}
    </div>
  )
}
