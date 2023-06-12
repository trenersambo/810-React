import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Forma from "./Compon/Forma";
import TodoList from "./Compon/TodoList";

import "./App.css";

function App() {
  const [todo, setTodo] = useState(['todo1', 'todo2'])

  // ф-ция добавления Объекта новой задачи
  let newTodo = (newText)=>{
    setTodo([...todo, newText])
  }

  // ф-ция удаления задачи из массива todo
 

  return (
    <div className="App">
      <h2>Todo App</h2>

      <Forma  NewTodoProp = {newTodo} />

      <TodoList todoProp = {todo} />
    </div>
  );
}

export default App;
