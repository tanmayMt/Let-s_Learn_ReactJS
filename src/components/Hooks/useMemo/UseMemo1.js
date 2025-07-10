// UseMemo1.js

//useMemo is a React Hook that memorizes the result of a function — it only recalculates when dependencies change. It is used to optimize performance by avoiding unnecessary re-computations on every render.

// 🧠 Think of useMemo as "cached calculation memory" for expensive logic.

// —

// 🟦 Real-Life Analogy:

// 🧮 Imagine solving a math puzzle — if the numbers don’t change, you don’t want to redo the same work again.
// You keep the answer written down — and only re-calculate if the numbers change.
//

import React, { useState, useMemo } from 'react';

function UseMemo1() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Running heavy calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num * 2;
    }
    return result;
  };

  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  const themeStyle = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#000',
    padding: '10px',
    marginTop: '10px'
  };

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setDark(prev => !prev)}>Toggle Theme</button>
      <div style={themeStyle}>
        Expensive Result: {memoizedResult}
      </div>
    </div>
  );
}

export default UseMemo1;