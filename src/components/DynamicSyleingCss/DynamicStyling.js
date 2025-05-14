import React, { useState } from 'react'

const DynamicStyling = () => {
  const [name,setName]=useState("");
  const [validInput,setValidInput]=useState(false);
  
  const handleNameChange = (e)=>{
    setName(e.target.value);
    
    if(name.length<2){
        setValidInput(false);
    }
    else{
        setValidInput(true);
    }
    console.log(name);
  }
  return (
    <>
      <h1>Dynamic Styling Css</h1>
      <input 
       type='text'
       value={name}
       onChange={handleNameChange}
       style={{backgroundColor:validInput?"green":"red"}}/>
    </>
  )
}

export default DynamicStyling
