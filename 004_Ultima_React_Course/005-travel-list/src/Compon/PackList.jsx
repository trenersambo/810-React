
import { useState } from "react";
import Item from "./pl-item";

function PackList({bag, deleteItem, deleteList}) {
   console.log(bag)

  let[sortBy, setSortBy] = useState('input')

  // не дается решение ?
  let sortBag = [];

  // сортировка 1: в каком порядке ввели - так и покажет 
  if(sortBy === 'input'){
    sortBag = bag ;
  }

  // сортировка 2: по алфавиту
  if(sortBy === 'txt'){
    sortBag = bag.slice().sort((a,b)=>a.txt.localeCompare(b.txt))
  }

  // сортировка 3: по алфавиту
  if(sortBy === 'pack'){
    sortBag = bag.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))
  }


  return ( 
  <div className="list">
    <ul>
      {sortBag.map((el, idx)=>(
         <Item el={el} key={el.id} deleteItem={deleteItem}/>
      ))}
    </ul>

    <div className="actions">
      <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
        <option value="input">Сортировка по умолчанию</option>
        <option value="txt">Сортировка по алфавиту</option>
        <option value="pack">Сортировка: упакован/неупакован</option>
      </select>

    <button onClick={deleteList}>Все нафиг!</button>
    </div>

  </div>
   );
}

export default PackList;