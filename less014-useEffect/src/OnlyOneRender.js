import './index.css'
// import { useEffect, useState } from "react";

// export function OneRender() {

//   const [users, setUsers]  = useState([])
//   //const [search, setSearch] = useState("")

//   useEffect(() => {
//     fetch("/users") // даст ошибку, т.к не указан правильный путь до фавйла 
//     .then((response) => response.json())
//     .then((users)=>setUsers(users))
//   }, []);

//   return (
//   <p id="onlyOne">Пример#2 Рендер только  1 раз</p>
//   );
// }
 

import { useState, useEffect } from "react";

export function OneRender() {
  const [count, setCount] = useState(0); // count задает непустой массив зависимостей

  useEffect(() => {
    console.log("Эффект, выполняемый при монтировании компонента или изменении количества");
    return () => {
    console.log("Эффект, выполняемый при размонтировании компонента");
    };
  }, [count]);

  return (
    <>
      <h1>Пример с НЕПУСТЫМ массивом зависимостей</h1>
      <h2>Счёт: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Увеличь счёт</button>
    </>
  );
}
