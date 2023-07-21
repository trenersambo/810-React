// Этот компонент передается в др.компонент - Sidebar.js
import { useState, useEffect } from 'react';

    
function InputAPI() {

  const[page, setPage] = useState(null)
  const[totPage, setTotPage] = useState(null)

  let apiUserPage = `https://reqres.in/api/users?page=${page}`

  const[arr, setArr] = useState( [] ) ;

  // useEffect нужен для загрузки из API + перерендер при смене стр-цы
  useEffect(()=>{
    fetch(apiUserPage)
    .then(resp=>{ return resp.json() })
    .then(({data, page, total_pages})=>{ 
        setArr(data)
        setPage(page) 
        setTotPage(total_pages)
    })
    .catch(err=>console.log(err))
  }, [page]  ) //[page] - активирует перерендер при смене стр-цы
  
 console.log(page, totPage) // 1 2 или // 2 2
  
  // отрисовка Карточек юзеров
  // вместо (el)=>... Можно применить ({id, email,avatar})=>...
    let renderDataArr = arr.map( (el)=> {
     return <div key={el.id} className='userCard'>
        <h3> {el.first_name}</h3>
        <img src={el.avatar} alt="" />
     </div>
 })

  // отрисовка кнопок (по кол-ву 'total_pages' из API)
  // №1. оздать массив с кол-ом элементов === totPage
  let buttonsArr = Array.from({length: totPage}, (_, index) => index + 1);

  //№2. Перебор массива->создать кол-во кнопок === totPage
  let renderButtons = buttonsArr.map(num=>{
    return (
    <button key={num} onClick={()=>setPage(num)}>
      Page №{num}
    </button>
    
    )
  })
 
  return ( 
  <>
    {renderButtons}

    <h3>Страница: {page}</h3>

    {renderDataArr}
     
  </>
   );
}

export default InputAPI;