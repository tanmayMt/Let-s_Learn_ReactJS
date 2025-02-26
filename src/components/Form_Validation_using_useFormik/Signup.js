import React,{useState}from 'react'
import './Signup.css'
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  const renderForm = (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

      </div>
      <div className="input-group">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />

      </div>
      <button type="submit">signup</button>
    </form>
  );
  return (
    <div className="signup-container">
      <h2>User Signup form</h2>
      {renderForm}
    </div>
  )
}

export default Signup;
