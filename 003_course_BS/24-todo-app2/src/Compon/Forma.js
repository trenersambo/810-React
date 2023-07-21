import { useState } from "react";
import styleForm from "./InputForm.module.css";

function Forma({todoArrProp} ) {

let [txt, setTxt] = useState('')
 
 let todoTextFoo=(ev)=>{
  ev.preventDefault()
  todoArrProp(txt)
  setTxt('')
 }

  return (
    <div>
      <form onSubmit={todoTextFoo}>

        <input type="text" onChange={(ev)=>setTxt(ev.target.value)}
         value={txt}
        name="txtInput" className={styleForm.inputEl} />

        <button type="submit" className={styleForm.btnEl}>
          Добавить todo
        </button>

      </form>
    </div>
  );
}

export default Forma;
