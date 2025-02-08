import React from 'react';
import Data from './data.json';

const MappingWithUniqueId=()=>{
  return (
    <div>
        {Data.map((data,index)=>{
            const {title,desc} = data;
            return(
                <div key={index}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            )
         })
        }
    </div>
  )
}
export default MappingWithUniqueId;
