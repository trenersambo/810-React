import {RiTodoFill} from 'react-icons/ri'

import style from './Todos.module.css'

function  Todo({elProp, delTodoPropProp}) {
 
 let delTodoFoo=()=>{
 delTodoPropProp(elProp.id)
 }

  return ( 
  <>
    <div className= {style.taskEl}  
    onDoubleClick={delTodoFoo}
    >
      <RiTodoFill className={style.icon}/>
      <h3>{elProp.text}</h3> 
    </div>

 
  </>
   );
}

export default Todo;