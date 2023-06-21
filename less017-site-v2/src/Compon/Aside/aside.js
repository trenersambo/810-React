import { useState } from 'react';
import './aside.css'

function Aside({el}) {
let [more, setMore] = useState(false)

let moreNoMore=()=>{
  setMore(!more)
}

  return ( 
  <div className="aside-post">
  
    <h4> {el.title}</h4>

    <div>{more? el.body : el.body.slice(0,42)} 

      <button className='btn'
      onClick={ moreNoMore}
      >
        {more? 'Свернуть' : '...Далее'} 
      </button>

    </div>

  </div>
 
   );
}

export default Aside;