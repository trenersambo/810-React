
import Todo from './Todo'
import style from './Todos.module.css'

// todoProp - это массив Объектов
function TodoList({todoProp} ) {

  return ( 
  <div  className={style.wrapper}>

    { todoProp.map((todoEl, idx)=> 
     <Todo key={idx} todoElProp = {todoEl}/>
       )}
 

  </div>

   );
}

export default TodoList;