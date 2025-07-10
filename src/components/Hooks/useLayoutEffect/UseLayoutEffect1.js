import React, { useLayoutEffect, useRef } from 'react';

function UseLayoutEffect1() {
  const topRef = useRef(null);

  // 🧠 This ensures that the scroll happens before the screen paints — no flicker.
  useLayoutEffect(() => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div>
      <div
        style={{
          height: '1500px',
          background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',
        }}
      >
        <h2 style={{ padding: '20px', color: '#888' }}>Scroll Down ↓</h2>
      </div>

      <div
        ref={topRef}
        style={{
          padding: '40px',
          margin: '20px',
          backgroundColor: '#4caf50',
          color: '#fff',
          textAlign: 'center',
          borderRadius: '8px',
          fontSize: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}
      >
        ✅ Smooth Scroll to Me on Load!
      </div>
    </div>
  );
}

export default UseLayoutEffect1;
