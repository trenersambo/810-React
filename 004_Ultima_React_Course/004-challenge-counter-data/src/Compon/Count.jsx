
function Count({countDown, countUp, count} ) {
  return ( 
  <div className="wrapper">
    <button onClick={countDown}>-</button>
    <p>Count: {count}</p>
    <button onClick={countUp}>+</button>
  </div>
   );
}

export default Count;