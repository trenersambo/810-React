import { useState } from "react";

function Item({el, deleteItem}) {

  let [checkit, setCheckit] = useState(false)

  // Для чего: true-false в чек-боксе
  // передать в PackList инф. об упаковке: true-false
  function changeCheck(){
    setCheckit(!checkit)
    el.packed = !checkit
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