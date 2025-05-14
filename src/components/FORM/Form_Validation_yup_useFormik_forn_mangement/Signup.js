import React,{useState}from 'react'
import './Signup.css'
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:''
    },
    onSubmit:(values, {resetForm})=>{
      console.log(values);
      resetForm({values:""})
    }
  })

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("User Data:", formData);
    
  // };

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
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
          value={formik.values.email}
          onChange={formik.handleChange}
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
          value={formik.values.password}
          onChange={formik.handleChange}
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
