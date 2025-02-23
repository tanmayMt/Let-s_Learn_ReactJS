import React ,{useState}from 'react';
import './style.css';
const Form3 = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 //In React, we can use the useState hook with an object to
 //manage multiple related state values efficiently
  const [user,setUser] = useState({
    name:'',
    email:'',
    password:''
  })

  const {name,email,password} = user;

  const handleChange = (event) =>{
    const fieldName = event.target.name;
    if(fieldName === 'name'){
      setUser({name:event.target.value,email,password});
    }
    else if(fieldName === 'email'){
      setUser({name, email : event.target.value, password});
    }
    else {
      setUser({name, email, password: event.target.value});
    }
  }
  
  // Function to handle form submission
  const handleSubmit = (event)=>{
    console.log(user);
    event.preventDefault();// Prevents page reload
  }
  return (
        <>
            <h1>Register-<small>(Form3)</small></h1>
            <form onSubmit={handleSubmit}>
                    <label>Name : </label>
                    <input
                        onChange={handleChange}
                        value={name} //value={name} makes the input a controlled component in React, ensuring it always reflects the latest state (name).
                                     //This keeps the UI in sync with the component state, providing better control over user input. 🚀
                        type="text"
                        name="name"
                        id="name"
                        required />

                    <label>Email : </label>
                    <input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        required />

                    <label>Password : </label>
                    <input
                        onChange={handleChange}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        required />
                <button type="submit">Register</button>
            </form>
        </>
  )
}

export default Form3;
