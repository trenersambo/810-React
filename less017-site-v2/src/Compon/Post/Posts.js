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

console.log(arr)

let userPost = arr.map((el,idx)=>{
  return <div className='user-wrap' key={idx}>
    <h3>{el.first_name}</h3>
    <h4>{el.last_name}</h4>
    <img src={el.avatar} alt="avatar" />
  </div>
})

  return(
 
  <>
    <Post userPostProp={userPost}/> 
 
  </>

 
 
 
  )
}

export default Posts