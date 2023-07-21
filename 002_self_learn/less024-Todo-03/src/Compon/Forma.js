import { useState } from "react";
import styleForm from "./InputForm.module.css";

function Forma( {NewTodoProp} ) {
 
 let [txt, setTxt] = useState('')

 let addTxt=(ev)=>{
  ev.preventDefault()
  NewTodoProp(txt)
  setTxt('')
 }

  return (
    <div>
      <form onSubmit={addTxt}>

        <input onChange={(ev)=> setTxt(ev.target.value) }
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
