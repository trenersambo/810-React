import './style.css'
import React from 'react';
import {useState} from 'react' ;

function LoginThree() {

  const[stack, setStack] = useState({
    JS: false,
    React: false,
    HTML: false
  })

  let addStack = (ev)=>{
     const { name, checked } = ev.target;
     console.log(name, checked,ev.target)
     
    setStack({ ...stack, [name]: checked });
  }

const selectedStacks = Object.keys(stack).filter((el) => stack[el]);

  return ( 
  <>
 
  <label>
  JavaScript
  <input type="checkbox" name="JS" checked={stack.JS} onChange={addStack} />
  </label>

  <label>
  React
  <input type="checkbox" name='React' checked={stack.React} onChange={addStack} />
  </label>

  <label>
  HTML + CSS
  <input type="checkbox" name='HTML' checked={stack.HTML} onChange={addStack} />
  </label>

  <h3>Твой стек: {selectedStacks.join(', ')}</h3>



  </>
   );
}

export default LoginThree;