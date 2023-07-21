import myStile from './Test.module.css'

function Test() {
  return ( 
  <>
  <p>Импорт стилей из Test.module.css</p>
  <p>Использую className= myStile.btn</p>
  <p>Имя класса: {myStile.btn}</p>

  <button className= {myStile.btn}>
  myStile.btn
  </button>

  <p>Внизу кнопка без применения класса</p>
  <p>её стили берутся из файла App.css</p>

  <button> 
  тег button без className
  </button>
  
  </>
   );
}

export default Test;