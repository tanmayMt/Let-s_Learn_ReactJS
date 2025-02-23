import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [n,setn]=useState('');
    const childToParentMoney=(childToParentMoney2)=>{
        console.log("In Parent(childToParentMoney): "+childToParentMoney2);
        setn(childToParentMoney2);
    }
    const parentSalary= 40;
  return (
    <div>
      <p>This is Parent Component</p>
      <Child parentSalary={parentSalary} childToParentMoney1={childToParentMoney}/>
      <small>In Parent Component, Money Get From Child:{n}</small>
    </div>
  )
}

export default Parent;