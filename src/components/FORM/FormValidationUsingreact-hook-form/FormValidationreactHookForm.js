import React from 'react';
import { useForm } from 'react-hook-form';

function FormValidationreactHookForm() {
  // Initialize the useForm hook
  // register: to register input fields with validation rules
  // handleSubmit: to handle form submission
  // errors: to capture validation errors
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function called when form is successfully submitted
  // 'data' contains the validated form input values
  const onSubmit = (data) => {
    // Show submitted form data as a stringified JSON alert
    alert(JSON.stringify(data));
  };

  return (
    // When the form is submitted, it runs the onSubmit function
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {/* Username Input Field */}
      <div>
        <label>Username:</label>
        <input
          // Register this input with the name "username"
          // Add validation: required
          {...register('username', { required: 'Username is required' })}
        />
        {/* Display error message if username is missing */}
        {errors.username && (
          <p style={{ color: 'red' }}>{errors.username.message}</p>
        )}
      </div>

      {/* Email Input Field */}
      <div>
        <label>Email:</label>
        <input
          // Register input with validation rules:
          // - required
          // - must match email pattern
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/, // Regex for email format
              message: 'Invalid email format', // Error message if not matched
            },
          })}
        />
        {/* Display email error if any */}
        {errors.email && (
          <p style={{ color: 'red' }}>{errors.email.message}</p>
        )}
      </div>

      {/* Password Input Field */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          // Register with validation rules:
          // - required
          // - minimum length: 6 characters
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Minimum 6 characters required',
            },
          })}
        />
        {/* Display password error if any */}
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit">Register</button>
    </form>
  );
}

export default FormValidationreactHookForm;
