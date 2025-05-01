import React, { useState, useEffect } from 'react';
import './useEffectExample.css'; // Make sure to import the CSS

function StylishCounter() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // calls with first render and depened on count
    console.log("useEffect");
  },[count]);

  return (
    <div className="container">
      {console.log("rednering")}
      <h1 className="title">useEffect Example</h1>
      <h2 className="count">Count: {count}</h2>
      <button
        className="increment-button"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>

<button
  className="loading-button"
  onClick={() => {
    setIsLoading(!isLoading);
  }}
>
  {isLoading ? 'Loading...' : 'Start Loading'}
</button>
    </div>
  );
}

export default StylishCounter;

