import React from 'react'
import './child.css';

const Child = (props) => {
    const childSalary=17;
    const {parentSalary}=props;
    const childToParentMoney=5;
  return (
    <div className="child-container">
      <h3>👶 This is Child Component</h3>
      <p>💰 Child Salary: <strong>{childSalary}</strong></p>
      <p className="parent-salary">👨 Parent Salary: <strong>{parentSalary}</strong></p>
      {/* Mony Get From Child:{props.childToParentMoney1(childToParentMoney)} */}
      {props.childToParentMoney1(childToParentMoney)}
    </div>
  )
}

export default Child;