// import {useState} from 'react' ;
// import './style.css'  ;


// function Login18() {

// const [age, setAge] = useState({
// before18: false,
// after18: false
// })  ;

// let changeAge = (ev)=>{
//   console.log(age) // до выбора ч/бокса: before18: false, after18: false



//   const {name, checked} = ev.target
//   console.log(name, checked) // выбор ч/бокса: before18: true

//    //setAge({...age, [name]: checked})

//     setAge({
//     before18: name === 'before18' ? checked : false,
//     after18: name === 'after18' ? checked : false
//   });

// }
//   console.log(age) // после выбора ч/бокса: before18: false, after18: false

 
//   return ( 
//   <>
//   <p>Задача №3. Доступ для 18-ти летних</p>

//   <label >
//     Тебе меньше, чем 18 лет
//     <input type="checkbox" name="before18" onChange={changeAge}/>
//   </label>

//   <label >
//     Тебе 18 лет или больше
//     <input type="checkbox" name="after18" onChange={changeAge}/>
//   </label>

//   {age.before18 && <p>Малолеткам нельзя</p> }
//   {age.after18 && <p>Заходи, гостем будешь!</p> }

//   </>
//    );
// }

// export default Login18;


import { useState } from 'react';
import './style.css';

function Login18() {
  const [age, setAge] = useState({
    before18: false,
    after18: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setAge({
      ...age,
      [name]: checked,
      [name === 'before18' ? 'after18' : 'before18']: false,
    });
  };

  return (   
    <>
      <p>Задача №3. Доступ для 18-ти летних</p>

      <label>
        Тебе меньше, чем 18 лет
        <input type="checkbox" name="before18" checked={age.before18} onChange={handleChange} />
      </label>

      <label>
        Тебе 18 лет или больше
        <input type="checkbox" name="after18" checked={age.after18} onChange={handleChange} />
      </label>

      {age.before18 && <p>Малолеткам нельзя</p>}
      {age.after18 && <p>Заходи, гостем будешь!</p>}
    </>
  );
}

export default Login18;
