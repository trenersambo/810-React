import {useState} from 'react' ;
function InputText() {

  const [txt, setTxt] = useState('Текст по умолчанию')
  //let value = 'null' ;

  let ChangeTxt=(ev)=>{
   setTxt(ev.target.value)
   console.log(txt.length)
  }

  return ( 
  <>
  {txt}
  <input type="text" value={txt} onChange={ChangeTxt}/>

  <h4>тут будет текст on-line из поля input:</h4>
  <textarea value={txt} ></textarea>
  
  </>
   );
}

export default InputText;