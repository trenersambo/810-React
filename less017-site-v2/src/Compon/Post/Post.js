import { useState } from 'react';
import {RiHeartFill} from 'react-icons/ri'

function Post({el }){
//console.log(el )

let [like, setLike]  = useState(false)

 let changeLike=(ev)=>{
  setLike(!like)

  //криво работает like ? ev.target.style.fill='red' : ev.target.style.fill=''
 
 }
 //console.log(like)

  return (
    <article className='users-list'>
      <div className='user-wrap'  >
        <h3>{el.first_name}</h3>
        <h4>{el.last_name}</h4>
        <img src={el.avatar} alt="avatar" />
        <RiHeartFill 
        className={like ? 'heart-svg like-red' : 'heart-svg'}
        onClick={changeLike}/>
      </div>
      
    </article>
  );

}

export default Post