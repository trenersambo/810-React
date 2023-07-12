import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import dataSport from './data/dataSport'

import Notfound from './NotFound'

function TrenSingl() {

  let params = useParams() // доступ к url
 //console.log(params) // ... sambo,  bjj,  judo

  let sportEl = dataSport.find((el)=>  el.sport===params.sportParam )  
 // console.log(sportEl) // 1 массив 

 // Вариант №1: Если страницы нет=>показ стр-цы Not Found
  // if(!sportEl){
  //   return  <>
  //   <Notfound/>
  //   <Link to=".." relative='path'>Обратно :)</Link>
  //   </>
  // }

 // Вариант №2: Если страницы нет=>Перенаправление на заданную страницу
 let navEl = useNavigate()
 useEffect(()=>{
  //'..', {relative: "path"} - выход на уровень выше относит-но текущего пути
  if(!sportEl) {navEl('..', {relative: "path"})}
 }, [sportEl, navEl]) // [sportEl] - для вызова useEffect при кажд. измен-ии sportEl

// ? - если sportEl=undefined, чтоб не было сбоя при рендере
  return ( 

  <>
    <h2>Расписание: {sportEl?.name}</h2>

    <h3>День, час: </h3>
    <h3>{sportEl?.date}</h3>
    <h4>C {sportEl?.timeIn} по {sportEl?.timeOut} </h4>


    <Link to=".." relative='path'>Список тренировок</Link>
    {/* пример относит. ссылки */}
 

  </>
   );
}

export default TrenSingl;

