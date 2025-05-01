import React, { useState, useEffect } from "react";
import "./DataFetch2.css"; // Make sure this CSS file exists

const loadingMessage = <p>todos is loading</p>;

const DataFetch2 = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if(!res.ok){
            throw Error("fecthing is not successful");
        }
        else{
            return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
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
      {error && <p> {error} </p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch2;
