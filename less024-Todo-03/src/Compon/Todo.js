import {RiTodoFill} from 'react-icons/ri'

import style from './Todos.module.css'

function  Todo({ todoElProp}) {
 
 
  return ( 
  <>
    <div className= {style.taskEl}  
     
    >
      <RiTodoFill className={style.icon}/>
      <h3>  {todoElProp}</h3> 
    </div>

 
  </>
   );
}

export default Todo;