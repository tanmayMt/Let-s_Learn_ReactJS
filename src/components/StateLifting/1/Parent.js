import React, { useState } from 'react'
import Child from './Child';
import './parent.css';

const Parent = () => {
    const [n,setn]=useState('');
    const childToParentMoney=(childToParentMoney2)=>{
        console.log("In Parent(childToParentMoney): "+childToParentMoney2);
        setn(childToParentMoney2);
    }
    const parentSalary= 40;
  return (
    <div className="parent-container">
      <h2>👨‍👦 This is Parent Component</h2>
      <Child parentSalary={parentSalary} childToParentMoney1={childToParentMoney}/>
       <p className="money-text">💰 Money Received from Child: <strong>{n}</strong></p>
    </div>
  )
}

export default Parent;