import React, { useState, useEffect } from "react";
import "./DataFetch2.css"; // Make sure this CSS file exists

const DataFetch2 = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      });
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => (
      <p className="todo-item" key={todo.id}>
        {todo.title}
      </p>
    ));

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todos</h1>
      {isLoading ? <p className="loading-text">Loading...</p> : todosElement}
    </div>
  );
};

export default DataFetch2;
