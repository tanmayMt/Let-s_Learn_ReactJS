import React from "react";
import Todo from "./Todo";
import './todos.css';

const Todos = (props) => {
  return (
    <div className="todos-container">
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;