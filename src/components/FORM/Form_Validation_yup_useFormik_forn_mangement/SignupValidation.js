import React from 'react'
import * as yup from "yup";
import './Signup.css'
import { useFormik } from 'formik';

const SignupValidation = () => {
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:''
    },

    validationSchema: yup.object({
     name:yup.string().min(2,"Nmae must have two charcter").required(),
     email:yup.string().email().required(),
     password:yup.string().min(5).required()
    }),

    onSubmit:(values, {resetForm})=>{
      console.log(values);
      resetForm({values:""})
    }
  })
  //Form Validation Error Messages
  const nameError = formik.touched.name && formik.errors.name && (
    <span style={{color:'red'}}>
      {formik.errors.name}
    </span>
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <span style={{color:'red'}}>
      {formik.errors.email}
    </span>
  );
  const passwordError = formik.touched.password && formik.errors.password && (
    <span style={{color:'red'}}>
      {formik.errors.password}
    </span>
  );

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
        {nameError}
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
        {emailError}
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
        {passwordError}
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

export default SignupValidation;
