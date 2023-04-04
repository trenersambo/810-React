// 1. необходимые импорты
import React from "react";
import {useState} from "react";

function Var1() {

  // 2.1. объявление state для кнопки 1
  const [count, setCount] = useState(0);

  // 2.2. объявление state для Поля ввода textarea
  const [comment, setComment] = useState([]);

  //2.2. создание Ref для поля ввода Ref
  let myRef = React.createRef() ;
  

  //2.1. код счётчика
  let clickBtn = () =>{
    let showCount = count ;
    showCount++ ;
    setCount(showCount) ;
  }

  //2.2. обработка введенного комментария
  let addCooment = ()=> {
    //выловить значение ввода в поле input
    let commentValue = myRef.current.value ;
    let comments  = [...comment, commentValue] ;
    console.log(comment, commentValue)

    //установить новый State
    setComment(comments);

    //очистка (хотя задвоения нет)
    myRef.current.value = ''  ;
 
  }

  return ( 
 
  <>
    <p> React state  (канал "webdev с нуля")</p>

    <button onClick={clickBtn}>Измени State на+1</button>

    <div>Четное или нечётное:   
      {count %2===0 ? 'Чётное' : "Нечётное"}
    </div>

    <p>Текущий State: {count}</p>

    

    {/* работа 2 - с текстовым полем textarea*/}
    <textarea ref = {myRef} ></textarea>
    <button onClick={addCooment}>Создать коммент</button>  

    {/* Показ введенных комментов */}
    <div>
      {comment.map((el, idx)=> 
      <h4 key={idx.toString()}>
        Комент №{idx}: {el}
      </h4>
      )}
    </div>  



  
  </>
   );
}

export default Var1;