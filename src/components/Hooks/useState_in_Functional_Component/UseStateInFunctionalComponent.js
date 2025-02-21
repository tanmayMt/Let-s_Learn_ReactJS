import React,{useState}from 'react'
import './style.css'

export default function UseStateInFunctionalComponent(){
  const [count,setCount] = useState(0);

  const handleIncrement = ()=>{
    setCount(count+1);
  }
  const handleDecrement = ()=>{
    setCount(count-1);
  }
  return (
      <div>
        <h2>Counting App - Using useState in Functional Component</h2>
                <h1>Count : {count}</h1>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement} >-</button>        
      </div>
  );
}
