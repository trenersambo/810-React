import panda from '../img/panda.jpg' ;
import './TestCompon.css' ;

import React from 'react' ;
 

function TestBtn(props) {

  let clckBottom = ( )=>console.log('Сработала кнопка "Жмяк!"  ' )
  let clckBtn2 = ()=>console.log('Сработала кнопка "Жми дважды" ')
  function Btn3(params){console.log('Функция приняла аргумент: '+params)}


  function showInput(event){
    console.log(event)
    console.log(event.target)
     // Добрался до value через event.target:
    console.log(event.target.value)
  }

  

  return ( 
  <>
     <img src={panda} alt="" />
    <h2>Изучение событий React в стиле {props.data.name}</h2>

    <button className='cB1 ' onClick={clckBottom}>Жмяк!</button>

    <button className='cB2' onDoubleClick={clckBtn2}>Кликни дважды!</button>

    <button className='cB3' onClick={ ()=>Btn3('аргумент')}>передай аргументы!</button>




    <h3>Ловим event.target.value:</h3>
    <section>
    <input className='inpt' type="text" onInput={showInput}/>    
    </section>

     
  </>

   );
}

export default TestBtn;