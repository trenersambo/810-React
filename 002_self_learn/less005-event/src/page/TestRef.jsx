// подробный разбор по частям - см. в docфайле Изучение react c лущен
import './TestCompon.css' ;

import React from 'react' ;
import {useState} from 'react'  ;

function TestRef(props) {
 
 
  function showRef1(ev){
    console.log(txtInput)
    console.log(txtInput.current)
    // Добрался до value через РЕФЫ:
    console.log(txtInput.current.value)   

  }

  function showRef2(ev){
  console.log(ev)
  console.log(txtOut)
  console.log(txtOut.current.value)  
  
  // Вывод того, что вводим в input (решение в лоб, не по react!) 
  txt.current.innerHTML =  txtOut.current.value 
  setOutput(txtOut.current.value)
  }

  
  // Пример #1 работы с РЕФАМИ (ловим volue)
   let txtInput = React.createRef()  ;


  // Пример #2 работы с РЕФАМИ (ловим volue + вывод его на экран)
   let txtOut = React.createRef()  ;  
   let txt =  React.createRef()  ; 


   //Пример #3 основы State
   const [output, setOutput ] = useState('ЗначениеПоУмолчанию') ; 


  return ( 
  <>
    <h2>Рассматриваем пример на Ref</h2>
    <section>
    <p>Пример-1 с РЕФАМИ:</p>
    <input className='inpt' type="text" 
    onInput={showRef1} ref = {txtInput}/>    
    </section>

  
    <section>
    <p>Пример-2 с РЕФАМИ (печать на экран):</p>  
    <input className='inpt' type="text" onInput={showRef2} ref = {txtOut}/> 
    <h3>Тут будет вывод из Ref: </h3>
    <p ref={txt}></p>
      
      <h3>Пример-3. Вывод из State:</h3>
      <p> {output}</p>  
    </section>    

  //**********************************
  *********************************** 
  </>

   );
}

export default TestRef;