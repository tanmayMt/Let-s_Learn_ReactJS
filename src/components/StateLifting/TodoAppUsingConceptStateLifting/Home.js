import React,{useState} from 'react'

import './homeStyle.css'
import NewTodo from './NewTodo';
import Todos from './Todos';
const dummyTodos = ["todo1", "todo2"];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }
  return (
    <div className="home-container">
      <h2>My Todo List</h2>
      <NewTodo onTodo={handleNewTodo}/>
      <Todos todos={todos}/>
    </div>
  )
}

export default Home;