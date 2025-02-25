import React from "react";
import './todo.css';

const Todo = (props) => {
  return (
    <div className="todo-card">
      <p>{props.todo}</p>
    </div>
  );
};

export default Todo;