import React from 'react'
import Child from './Child';

const Parent = () => {
    const parentAge= 40;
  return (
    <div>
      <p>This is Parent Component</p>
      <Child parentAge={parentAge}/>
    </div>
  )
}

export default Parent;