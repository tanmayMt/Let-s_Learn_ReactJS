import React ,{useState}from 'react';
import './style.css';
const Form2 = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [user,setUSer] = useState({
    name:'',
    email:'',
    password:''
  })

  const {name,email,password} = user;

  const handleNameChange = (event)=>{
    setUSer({name:event.target.value,email,password});
  }
  const handleEmailChange = (event)=>{
    setUSer({name,email:event.target.value,password});
  }
  const handlePasswordChange = (event)=>{
    setUSer({name,email,password:event.target.value});
  }
  
  const handleSubmit = (event)=>{
    console.log(user);
    event.preventDefault();
  }
  return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                    <label>Name : </label>
                    <input
                        onChange={handleNameChange}
                        value={name} //value={name} makes the input a controlled component in React, ensuring it always reflects the latest state (name).
                                     //This keeps the UI in sync with the component state, providing better control over user input. 🚀
                        type="text"
                        name="name"
                        id="name"
                        required />

                    <label>Email : </label>
                    <input
                        onChange={handleEmailChange}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        required />

                    <label>Password : </label>
                    <input
                        onChange={handlePasswordChange}
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

export default Form2;
