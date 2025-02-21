//update state based on previous state
import React,{useState}from 'react'
import './style.css'

export default function UseStateInFunctionalComponent(){
  const [count,setCount] = useState(0);// Initialize state with count set to 0

  const handleIncrement = ()=>{
    // setCount(count+1);  //0+1=1
    // setCount(count+1);  //0+1=1
    // setCount(count+1);  //0+1=1
    // update state based on previous state
    setCount((count)=>count+1);  //0+1=1
    setCount((count)=>count+1);  //1+1=2
    setCount((count)=>count+1);  //2+1=3
    //If we directly use setCount(count + 1), React batches state updates, causing unexpected results.
    // Using a function inside setCount ensures we get the latest state value before updating.
  }
  const handleDecrement = ()=>{
    setCount(count-1);
  }
  return (
      <div>
        <h2>Update state based on previous statein useState in Functional Component</h2>
                <h1>Count : {count}</h1>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement} >-</button>        
      </div>
  );
}
