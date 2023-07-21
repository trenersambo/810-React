import { useState } from "react";
import styleForm from "./InputForm.module.css";

function Forma({changeArrTodoProp}) {
  //console.log(changeArrTodoProp)

  let [todoTxt, setTodotxt] = useState('')

  let submitData = (ev)=>{
    ev.preventDefault()
    changeArrTodoProp(todoTxt)
    setTodotxt('')
  }

  return (
    <div>
      <form onSubmit={submitData}>

        <input type="text" 
        onChange={(ev)=>setTodotxt(ev.target.value) }
        value={todoTxt}
        name="txtInput" className={styleForm.inputEl} />

        <button type="submit" className={styleForm.btnEl}>
          Добавить todo
        </button>

      </form>
    </div>
  );
}

export default Forma;
