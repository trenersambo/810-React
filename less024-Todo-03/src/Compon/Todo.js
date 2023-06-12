import {RiTodoFill} from 'react-icons/ri'

import style from './Todos.module.css'

function  Todo({ todoElProp, idxProp, delTodoPropProp}) {
 let deleteTodo=()=>{
  delTodoPropProp(idxProp)
 }
 
  return ( 
  <>
    <div className= {style.taskEl}  
     onDoubleClick={deleteTodo}
    >
      <RiTodoFill className={style.icon}/>
      <h3>  {todoElProp}</h3> 
    </div>

 
  </>
   );
}

export default Todo;