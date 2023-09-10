 

function Count({ step, num, countDown, countUp, setNum} ) {
  console.log('В count.jsx пришёл '+ typeof(step)+ ': ' + step)
  console.log('num = ' + num)

  return ( 
  <div className="wrapper">

    <button onClick={countDown}>-</button>

    <input  onChange={(ev)=> setNum(+ev.target.value) } value={num} />

    <button onClick={countUp}>+</button>

  </div>
   );
}

export default Count;