import React from 'react';
import Data from './data'

export const NestedMapping = () => {
  return (
    <div>
      {Data.map((data)=>{
        const {id,Name,Age,Phone} = data;
        return(
          <div key={id}>
            <h4>ID: {id}</h4>
            <h3>Name: {Name}</h3>
            <h3>Age: {Age}</h3>
            {/* If your Phone array is meant to hold multiple numbers, then you should restructure your data.js to avoid duplicate fields */}
            {Phone.home && <p>Home: {Phone.home}</p>}
            {Phone.office && <p>Office: {Phone.office}</p>}
            {/* {Phone.map((phone,index)=>{
               const {home,office}=phone;
               return(
                <div key={index}>
                    <p>Home: {home}</p>
                    <p>Office: {office}</p>
                </div>
                )
            })} */}

            {/* The issue is that in your data.Phone array, each object inside might contain both home and office numbers, and your .map() function iterates over all the phone objects. If there are multiple objects in data.Phone, it will render "Home" and "Office" multiple times.
                Solution:
                Instead of having multiple objects in the Phone array, you should structure it correctly, or adjust your rendering logic. */}

            {/* {Phone.length > 0 && (
                <>
                {Phone.home && <p>Home: {Phone.home}</p>}
                {Phone.office && <p>Office: {Phone.office}</p>}
                </>
            )} */}

            ------------------------------------------------------<br/>
          </div>
        )
      })}
    </div>
  )
}
