import "./style.css";
import { useState } from "react";

export default function ListFromArray() {
  let [arr, setClick] = useState([1,2,3]);

  // перебор массива для передачи в <ul>...</ul>
  let listArr = arr.map((el, idx)=>{
    return (<li key={idx.toString()}>
      {el}
    </li>)
  })

  let addvalue=()=>{
    // рандом нового числа
    let random  = Math.round(Math.random()*10)

    // деструктуризация / добавление в массив (как push)
    let newArr = [...arr, random]

    console.log(newArr)

    // вызов перерендера из-за смены состояния
    setClick(newArr)
  }

  // стереть все (состояние: пустой [])
  let clearAll=()=>{
    setClick([])
  }

  // удали послдений элемент
  let deleteLastEl=()=>{
      if (arr.length > 0) {
    let newArr = arr.slice(0, arr.length - 1);
    setClick(newArr);
  }
  }


  return (
    <>
      <p>Пример №4. Создать список из данных массива</p>

      <ul> {listArr} </ul>

      <button onClick={addvalue} > 
      Добавить в спискок ещё значение
      </button>

      <button onClick={clearAll}>Стереть все</button>

      <button onClick={ deleteLastEl} >Удали последний элемент</button>
    </>
  );
}
 