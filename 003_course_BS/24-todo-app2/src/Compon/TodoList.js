
import Todo from './Todo'
import style from './Todos.module.css'

// todoProp - это массив Объектов
function TodoList({todoProp, delTodoProp}) {

  return ( 
  <div  className={style.wrapper}>

      {todoProp.map((el)=>
        <Todo  key={el.id}
        elProp = {el} 
        delTodoPropProp = {delTodoProp} /> 
      )}
      
        {!todoProp.length  && <h3>Задач нет</h3>}
 
  </div>

   );
}

export default TodoList;