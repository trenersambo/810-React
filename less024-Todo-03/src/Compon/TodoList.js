
import Todo from './Todo'
import style from './Todos.module.css'

// todoProp - это массив Объектов {text, is.., id}
function TodoList({todoProp, delTodoProp} ) {

  return ( 
  <div  className={style.wrapper}>

    { todoProp.map((todoObjEl)=> 
     <Todo key={todoObjEl.id} 
        todoObjElProp = {todoObjEl}

        delTodoPropProp = {delTodoProp}
      />
       )}
      
      {!todoProp.length && <h3> Список пуст :-) </h3>}
 

  </div>

   );
}

export default TodoList;