import React from 'react';
import Data from './data';

const MappingWithUniqueId=()=>{
  return (
    <div>
        {Data.map((data)=>{
            const {id,title,desc} = data;
            return(
                <div key={id}>
                    <h2>Title: {title}</h2>
                    ID: {id}
                    <p><b>Description: </b>{desc}</p>
                </div>
            )
         })
        }
    </div>
  )
}
export default MappingWithUniqueId;
