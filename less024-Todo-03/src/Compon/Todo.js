import {RiTodoFill} from 'react-icons/ri'

import style from './Todos.module.css'

function  Todo({ todoObjElProp, delTodoPropProp}) {
 let deleteTodo=()=>{
  delTodoPropProp(todoObjElProp.id)
 }
 
  return ( 
  <>
    <div className= {style.taskEl}  
     onDoubleClick={deleteTodo}
    >
      <RiTodoFill className={style.icon}/>
      <h3>  {todoObjElProp.text}</h3> 
    </div>

 
  </>
   );
}

export default Todo;