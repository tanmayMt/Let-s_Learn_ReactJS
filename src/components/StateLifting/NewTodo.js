import React, {useState}from "react";
import './style.css';

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");


  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo: </label>
      <input
        type="text"
        id="todo"
        name="todo"
        onChange={handleInputChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
