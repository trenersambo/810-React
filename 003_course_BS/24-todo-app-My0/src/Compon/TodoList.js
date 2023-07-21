
import Todo from './Todo'
import style from './Todos.module.css'

function TodoList({arrtodoProp, delTodoProp}) {
 //console.log(arrtodoProp)


  return ( 
  <div  className={style.wrapper}>

    {arrtodoProp.map((el, idx)=>
      <Todo elProp = {el} key={idx}
      delTodoPropProp = {delTodoProp}
      index = {idx}
      />
    )}

    {arrtodoProp.length < 1 && <h3>Список ПУСТ</h3> }
  
  </div>

   );
}

export default TodoList;