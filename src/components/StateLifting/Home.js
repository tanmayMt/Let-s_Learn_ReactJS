import React from 'react'

import Todo from './Todo'
import NewTodo from './NewTodo';

const Home = () => {
  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  }
  return (
    <div>
      <NewTodo onTodo={handleNewTodo}/>
      <Todo title="Learn React.js"/>
    </div>
  )
}

export default Home;