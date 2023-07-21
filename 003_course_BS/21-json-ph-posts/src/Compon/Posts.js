import {useState, useEffect} from 'react' ;
import Post from './Post'
import './style.css'

let api = `https://jsonplaceholder.typicode.com/posts/`

function Posts() {
// Состояние для: массива постов (posts)
// Состояние для: сообщения об ошибке
// Состояние для: индикатор загрузки данных из API
const [posts, setPosts] = useState([])
const [ertext, setErtext] = useState('')
const [preload, setPreload] = useState(true)

// Одноразовый вызов api (т.к. пармас массива пустой)
useEffect(()=>{
  fetch(api)
  .then((respon) => respon.json())
  .then((data) => {
    setPosts(data)
  })
  .catch(err=>{setErtext(err.message) } )
  .finally(()=>setPreload(false))

} ,[])

// map-перебор массива posts для props (мой junior-вариант)
  let postsElm = posts.map(({id, title, body})=>{
    return(
    <div key={id} className='api_Post'>
      <h2>{title}</h2>
      <h3>{body}</h3>
    </div>
    )
  })

// 1.Прелоадер (можно gif)
  if(preload){
    return <img src="./img/load.gif" alt="" />
    // <h3>Чё-то там гружу из API ...</h3>
  }

// 2.Если ошибка: отрисует текст ошибки, после return->stop
  if(ertext){
    return <h3>Что-то пошло не так: {ertext}</h3>            
  }

// 3.Если нет ошибки, отработает этот return (как true)
  return ( 
  <>
  <p>100 Постов из fake Api</p>
  <Post postsProps = {postsElm}/>
  </>
   );
}

export default Posts;