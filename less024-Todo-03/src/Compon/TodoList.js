
import Todo from './Todo'
import style from './Todos.module.css'

// todoProp - это массив Объектов
function TodoList({todoProp, delTodoProp} ) {

  return ( 
  <div  className={style.wrapper}>

    { todoProp.map((todoEl, idx)=> 
     <Todo key={idx} todoElProp = {todoEl}
      idxProp = {idx} delTodoPropProp = {delTodoProp}
      />
       )}
      
      {!todoProp.length && <h3> Список пуст :-) </h3>}
 

  </div>

   );
}

export default TodoList;