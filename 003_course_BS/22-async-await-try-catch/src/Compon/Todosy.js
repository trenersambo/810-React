import {useEffect, useState} from 'react'
import './style.css'
import Todo from './Todo'

let api = `https://jsonplaceholder.typicode.com/todos`

function Todosy() {

const [todos, setTodos] = useState([])
const [ertext, setErtext] = useState('')
const [preload, setPreload] = useState(true)

useEffect(()=>{
  async function fetchData(){
    try {
      const res = await fetch(api)
      const tds = await res.json()
      setTodos(tds)
    } catch (err) {
      setErtext(err.message)
    }
    setPreload(false)
  }
fetchData()
      //какой был fetch до рефакторинга:
  // fetch(api)
  // .then((respon) => respon.json())
  // .then((data) => { setTodos(data) })
  // .catch(err=>{setErtext(err.message) } )  
  // .finally(()=>setPreload(false))

} ,[ ] ) 
  // надпись при загрузке
  if(preload){
    return <h3>Загружаю данные из API..</h3>
  }
  // надпись при ошибке
  if(ertext){
    return <h3>Чё-то пошло не так. Уже спешим. Ага.</h3>
  }
  // передча props (15 карточек из 200, slice(...) )
  return ( 
  <>
  <p>ТоДошки: 15 из 200 </p>
  {todos
  .slice(0, 15)
  .map( (todosEl)=>  
  <Todo {...todosEl} key={todosEl.id} />) }
  </>
   );
}

export default Todosy;