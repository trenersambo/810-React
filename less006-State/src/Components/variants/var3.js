
import React, { useState, useEffect } from "react";

export function Var3(props) {
  let [text, setText] = useState(props);

  const updateText = () => {
    setText((prevState) => (
    { ...prevState, txt: prevState.txt + "_изменен" }));
  };

  //печать в консоль нового слова
  // useEffect(() => { console.log(text) }, [text]); 

  return (
    <>
      <p>Опыт №3: передача props в state</p>

      <p>Тут props из App.jsx: {props.txt}</p>

      <button onClick={updateText}>show</button>

      <p> Тут новое слово: {text.txt}</p>
    </>
  );
}
