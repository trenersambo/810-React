// Импортируем необходимые модули
import './content.css';
import { useState, useEffect } from 'react';

function Content() {

  // Создаем состояние clonArr, используя useState()
  const [clonArr, setClonArr] = useState([]);

  // Запускаем эффект при помощи useEffect(), получая данные с сервера
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then((res)=> {
        return res.json()
      })
      .then((data)=>{
        setClonArr([...data]); // изменяем состояние, когда данные загрузились
      })
      .catch((err)=>{
        console.log(err)
      })
  }, []); // передаем пустой массив зависимостей, чтобы эффект запускался только один раз

  // Возвращаем JSX-разметку, отображающую заголовок, изображения и заголовки к ним
  return ( 
    <>
      <div className="content_left">
        <h2>блок Контента из API</h2>

        <div className='idName'>

          {clonArr.slice(0,4).map(el=>
          <div key={(el.id).toString()}>
            <p>{el.title}</p>
            <img src={el.thumbnailUrl} alt="" />
            <hr/>
          </div>)}

        </div>

      </div>  
    </>
  );
}

export default Content;
