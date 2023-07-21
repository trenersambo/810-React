import {useState } from 'react'

import Forma from './Compon/Forma'
import TodoList from './Compon/TodoList'

import './App.css';

function App() {
  
  const [arrtodo, setArrtodo] = useState([ ])

  let changeArrTodo=(newTodo)=>{
    setArrtodo([...arrtodo, newTodo])
  }

  let delTodo=(index)=>{
   
   setArrtodo(arrtodo.filter((_, idx)=> idx !==index))

  }

  return (
    <div className="App">
      <h2>Todo App</h2>

      <Forma changeArrTodoProp = {changeArrTodo} />

      <TodoList  arrtodoProp = {arrtodo}
                 delTodoProp = {delTodo}  />

    </div>
  );
}

export default App;
