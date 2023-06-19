import {useEffect, useState} from 'react' ;

import './post.css'

import Post from './Post';

const api = 'https://reqres.in/api/users?page=2'

let Posts=()=>{
const[arr, setArr] = useState( [] ) ;

useEffect(()=>{

  fetch(api)
        .then(response => response.json())
        .then(json => {
          //console.log(json)
          setArr(json.data)
          
        })

        .catch(err=>console.log(err))

},[])

//такой код передает каждый элемент отдельно
  return(
  <>
    {arr.map((el, idx)=>{
        return <Post el = {el} key={idx}/> 
      })
    }

  </>

  )
}

export default Posts