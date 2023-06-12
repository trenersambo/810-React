import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Forma from "./Compon/Forma";
import TodoList from "./Compon/TodoList";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([])

  // ф-ция добавления Объекта новой задачи
  let newTodo = (newText)=>{
    let todoObj = {
    text: newText, // текст из todo
    isCompiled: false, // выполнен / не выполнен
    id: uuidv4(), // присвоить динамич. id
    }

    console.log(todoObj) // тест

    setTodo([...todo, todoObj]) // добав. в [todo] нов.текст
  }

  // ф-ция удаления задачи из массива todo
 let delTodo = (id)=>{
  setTodo(todo.filter((todoObj)=>todoObj.id !=id))
 }
  // Помним, что todo - это уже массив объектов (text, ..,id)
  return (
    <div className="App">
      <h2>Todo App</h2>

      <Forma  NewTodoProp = {newTodo} />

      <TodoList todoProp = {todo} delTodoProp={delTodo}/>
    </div>
  );
}

export default App;
