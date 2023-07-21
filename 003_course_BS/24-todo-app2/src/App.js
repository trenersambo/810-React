import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Forma from "./Compon/Forma";
import TodoList from "./Compon/TodoList";

import "./App.css";

function App() {
  let [todo, setTodo] = useState([]);

  // ф-ция добавления Объекта новой задачи
  let todoArr = (newTxt) => {
    // Объект задания (текст, исполнение, id)
    const newTodo = {
      text: newTxt,
      isComplited: false, // исполнение todo
      id: uuidv4(), // рандомный id
    };
    // console.log(newTodo)
    setTodo([...todo, newTodo]); // создать массив объектов
  };

  // ф-ция удаления задачи из массива todo
  let delTodo = (id) => {
    setTodo(todo.filter((todoEl) => todoEl.id !== id));
  };

  return (
    <div className="App">
      <h2>Todo App</h2>

      <Forma todoArrProp={todoArr} />

      <TodoList todoProp={todo} delTodoProp={delTodo} />
    </div>
  );
}

export default App;
