import React from 'react' ;
import {useState} from 'react' ;
import './style.css'

function SelectList() {
  // №1. Состояние для SELECT
  const [sport, setSport] = useState('bjj')
  // #2. REF для для SELECT
  let sportValue = React.createRef()

  //№3. Ф-ция смены состояния от выбора нового спорта
  let changeSport=(ev)=>{
    setSport( sportValue.current.value)

    // console.log(ev.target.value)
    // console.log(sportValue.current.value)
  }

  return ( 
  <>
  <h2>Выпадающий список:</h2>
  <form >
    <select  value={sport} onChange={changeSport} ref={sportValue}>

      <option value="sambo">Sambo</option>
      <option value="bjj">BJJ</option>
      <option value="judo">Judo</option>

    </select>
  </form>


  <p>Из списка выбрано: {sport}</p>

  </>
   );
}

export default SelectList;