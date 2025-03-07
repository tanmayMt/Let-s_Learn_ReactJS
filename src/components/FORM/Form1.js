import React,{useState} from 'react'
import './style.css'

export default function Form1() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e) =>{
        console.log(name, email, password)
        e.preventDefault();
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
                        onChange={(e) => setPassword(e.target.value)}
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
