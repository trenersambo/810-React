import React from 'react' ;
import {useState} from 'react' ;

import './style.css'

function LoginForm2() {

  let handFormSubmit=(ev)=>{
    ev.preventDefault(); // не перегружает страницу 
  }

  // №1. состояние для строки 'Имя'
  const[user, setUser] = useState('ВведиИмя')

  // №1. ref для инпута 'Имя'
  let userInput = React.createRef()
  function showRefUser(ev){
    console.log(ev.target.value)
    console.log( userInput.current.value)
    
    //менятся состояние при вводе в input 
    setUser(userInput.current.value)
  }

  // №2. состояние для строки 'Пароль'
  const[passw, setPassw] = useState( null)

  // №2. ref для инпута 'Пароль'
  let passInput = React.createRef()
  function showRefPass(ev){
    //менятся состояние при вводе в input 
    setPassw(passInput.current.value)     
  }


  return ( 
  <>
  <h2>Пробуем React.createRef( )</h2>
  <form action="" onSubmit={handFormSubmit}>

    <label htmlFor="">
        Имя:
        <input 
        type="text" name="user" 
        placeholder={user}
        onInput={showRefUser} ref={userInput} />
    </label>

    <label htmlFor="">
        Пароль:
        <input 
        type="password" 
        name="pass" 
        onInput={showRefPass} ref={passInput} />
    </label>

    <button type="submit">Log In</button>

  </form>

  <p>Введено в 'Имя': {user}</p>
  <p>Введено в 'Пароль': {passw}</p>

  </>
   );
}

export default LoginForm2;