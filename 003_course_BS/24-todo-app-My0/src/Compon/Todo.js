import {RiTodoFill} from 'react-icons/ri'

import style from './Todos.module.css'

function Todo({elProp, delTodoPropProp, index}) {
  // console.log(elProp)
let test=()=>{
  console.log( delTodoPropProp ,index )
  delTodoPropProp(index)
}

  return ( 
  <>
    <div className= {style.taskEl}
    onDoubleClick={test}  >
      <RiTodoFill className={style.icon}/>
      <h3>{elProp}</h3> 
    </div>

 
  </>
   );
}

export default Todo;