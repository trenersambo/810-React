import { useState } from "react";

function Item({el, deleteItem}) {

  let [checkit, setCheckit] = useState(false)

  function changeCheck(){
    setCheckit(!checkit)  // смена true-false в чек-боксе
    el.packed = !checkit  // передать в PackList инф. об упаковке: true-false
  }

  return ( 
 
     <>
        <li>
          <input type="checkbox" 
          checked={checkit} 
          onChange={ changeCheck}
          />

            <span className={checkit? 'text-checked' : ''} >
              {el.number} {el.txt}
            </span>  

          <button onClick={()=>deleteItem(el.id)}>
            X
          </button>

        </li>
     </>

 
   );
}

export default Item;