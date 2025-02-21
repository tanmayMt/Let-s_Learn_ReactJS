
import React from 'react'

const EventBubblingstopPropagation = () => {

  const handleParentClick = (event) => {
    console.log("Parent:",event);
  };

  const handleChildClick = (event) => {
    console.log("Child:",event);
  };

  return (
    <div onClick={handleParentClick} style={{ padding: "20px", background: "lightgray" }}>
      <button onClick={handleChildClick}>Click Me</button>
    </div>
  );
}

export default EventBubblingstopPropagation;
