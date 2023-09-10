
function Step({stepMinus, stepPlus, step}) {

  return ( 
  <div className="wrapper">
    <button onClick={stepMinus}>-</button>
    <p>Step: {step}</p>
    <button onClick={stepPlus}>+</button>
  </div>
   );
}

export default Step;