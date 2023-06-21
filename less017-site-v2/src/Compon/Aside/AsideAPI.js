// улетает в App.js
import {useEffect, useState} from 'react'
import  Aside from './Aside';

import './aside.css'

let AsideAPI=()=>{

// ...?skip&limit  особенность API dummyjson.com

let api = 'https://dummyjson.com/posts?limit=6' // выдаст 6(lim) постов на 1 запрос
//let api = 'https://dummyjson.com/posts?skip=5'// выдает с (skip)6 по 30 пост за 1 запрос
//let api = 'https://dummyjson.com/posts?skip=5&limit=15'// выдает 15 постов с 6 по 20-й за 1 запрос



let [arr, setArr] = useState([])

useEffect(() => {
  const fetchData = async () => {
 
    try {
      const response = await fetch(api);
      const json = await response.json();
      setArr(json.posts);
    } catch (error) {
      console.log(error);
    }

 
  };

  fetchData();
}, []);

return(
  <div className="aside-wrapper">
      <h3>блок Aside</h3>

    {arr.map((el,idx)=> {
      return  <Aside el={el} key={idx}/> 
      })
    } 

  </div>

)

}
export default AsideAPI 
 