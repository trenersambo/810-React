import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'


import style from './Todos.module.css'

function  Todo({ todoObjElProp, delTodoPropProp, toggleCompiledProp}) {

 let deleteTodo=()=>{
  delTodoPropProp(todoObjElProp.id)
 }

  return ( 
  <> 
    <div className= {`${style.taskEl} ${todoObjElProp.isCompl ? style.isComplit : ''}`}  
     onDoubleClick={deleteTodo} >

      <RiTodoFill className={style.todoIcon}/>
      <h3 className= {style.todoText}>  
        {todoObjElProp.text}
      </h3> 

      <RiDeleteBin2Line 
      onClick={deleteTodo}
      className={style.delIcon}/>

      <FaCheck 
      onClick={()=>toggleCompiledProp(todoObjElProp.id)}
      className={style.yesIcon}/>

    </div>

 
  </>
   );
}

export default Todo;