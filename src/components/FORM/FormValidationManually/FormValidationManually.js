import React, { useState } from 'react';

function FormValidationManually() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!email) {
      err.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
                //.test() is a method of regular expressions.
                // It checks whether the email matches the pattern.
      err.email = 'Invalid email format';
    }

    if (!password) {
      err.password = 'Password is required';
    } else if (password.length < 6) {
      err.password = 'Password must be at least 6 characters';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default FormValidationManually;
