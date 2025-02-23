import React from 'react'

const Child = (props) => {
    const childSalary=17;
    const {parentSalary}=props;
    const childToParentMoney=5;
  return (
    <div>
      <p>This is Child Component</p>
      <small>Child Salary: {childSalary}</small><br/>
      <small>Parent Salary: {parentSalary}</small>
      {/* Mony Get From Child:{props.childToParentMoney1(childToParentMoney)} */}
      {props.childToParentMoney1(childToParentMoney)}
    </div>
  )
}

export default Child;