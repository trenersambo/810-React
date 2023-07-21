function Todo(props) {
// console.log(props)
let {userId, id, title, completed} = props
//console.log( userId, id, title, completed)

  return ( 
  <>
  <div className="wrap_todo">
    <h2>{title}</h2>
    {completed 
    ? <p>Задача: исполнена</p> 
    : <p>Задача: не исполнена</p> }
  </div>
   
  </>
   );
}

export default Todo;