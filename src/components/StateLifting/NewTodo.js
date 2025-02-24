import React from "react";

const NewTodo = (props) => {
  props.onTodo({title:"This is new Todo"});
  return (
    <form>
      <label htmlFor="todo">New Todo: </label>
      <input
        type="text"
        id="todo"
        name="todo"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
