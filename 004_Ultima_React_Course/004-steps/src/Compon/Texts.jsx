
const msg = [
'',
'Освоил HTML и CSS ',
'Изучил фреймворк React',
'Создал свою веб-студию'
]

function Texts({numStepProp: num}) {
//console.log(num)
  return ( 
    <>
      <h2 className="txt-wrapper">Шаг №{num}: {msg[num]}</h2>
    </> 
    );
}

export default Texts;