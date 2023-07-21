import "./style.css";
import { useState } from "react";

export function ObjState() {
  
  const [state, setState] = useState({
     counter: 0,
     sport:{
      name: "SAMBO",
      country: "USSR"
     }
  } )

  let showObjConsol=()=>{
    setState({
      ...state,
      counter: state.counter+1
    })

   console.log(state)
  }

  return (
    <>
      <p>Пример №3. Пример: объект в State</p>

      <button onClick={showObjConsol}>
         Жимк ! Смотри в консоль
      </button>

      <div>Конпка нажата: {state.counter} </div>
      <div>Спорт: {state.sport.name} </div>
 
    </>
  );
}

  
