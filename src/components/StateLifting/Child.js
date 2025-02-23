import React from 'react'

const Child = (props) => {
    const childAge=17;
    const {parentAge}=props;
  return (
    <div>
      <p>This is Child Component</p>
      <small>Child Age: {childAge}</small><br/>
      <small>Parent Age: {parentAge}</small>
    </div>
  )
}

export default Child;