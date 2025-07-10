import React, { useRef, useEffect } from 'react';

function UseRef1() {


    //When a login page loads, you want the username input to be automatically focused, so the user can start typing right away.

  const usernameRef = useRef(null);

  useEffect(() => {
    // Automatically focus on the input field
    usernameRef.current.focus();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>Login</h2>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label>Username: </label>
          <input
            type="text"
            ref={usernameRef}
            placeholder="Enter your username"
            style={{
              padding: '10px',
              fontSize: '16px',
              width: '250px',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              padding: '10px',
              fontSize: '16px',
              width: '250px',
            }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default UseRef1;
