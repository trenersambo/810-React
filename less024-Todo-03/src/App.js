import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Forma from "./Compon/Forma";
import TodoList from "./Compon/TodoList";

import ActionsButtons from './Compon/ActionButtons'

import "./App.css";

function App() {
  const [todo, setTodo] = useState([])

  // ф-ция добавления Объекта новой задачи
  let newTodo = (newText)=>{
    let todoObj = {
    text: newText, // текст из todo
    isCompl: false, // toggle: true->false
    id: uuidv4(), // присвоить динамич. id
    }

    console.log(todoObj) // тест

    setTodo([...todo, todoObj]) // добав. в [todo] нов.текст
  }

  // ф-ция удаления задачи из массива todo
 let delTodo = (id)=>{
  setTodo(todo.filter((todoObj)=>todoObj.id !=id))
 }
  // ф-ия toggle-смены true на false и обратно
  let toggleCompl=(id)=>{
    setTodo(todo.map((elObj)=> 
        elObj.id === id // если нашли такое, то ...
      ? {... elObj, isCompl: !elObj.isCompl} //... меняем Boolean
      : {... elObj}
      )
    )}

    // ф-ция удаления всех задач (состояние: пустой [] )
    let deleteAllTodo=()=>{
      setTodo([])
    }

    //ф-иця удалить только исполненные задачи (isCompl д.быть true)
    let deleteComplite=()=>{
      setTodo(todo.filter((el)=>!el.isCompl))
    }

  // Помним, что todo - это уже массив объектов (text, ..,id)
  return (
    <div className="App">
      <h2>Todo App</h2>

      <Forma  NewTodoProp = {newTodo} />

      {!!todo.length && <ActionsButtons 
      deleteAllTodo={deleteAllTodo}
      deleteComplite={deleteComplite}/>}

      <TodoList 
      todoProp = {todo} 
      delTodoProp={delTodo} 
      toggleCompiledProp = {toggleCompl}
      />
    </div>
  );
}

export default App;
