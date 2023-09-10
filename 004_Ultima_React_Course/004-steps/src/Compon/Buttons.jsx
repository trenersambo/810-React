
function Buttons({ stepUpProp, stepDownProp, numStepProp } ) {

  return ( 
    <div className="btn-wrapper">
      <button 
      onClick={stepDownProp} 
      disabled = {numStepProp <=1 } >
        Prev
      </button>

      <button 
      onClick={stepUpProp} 
      disabled = {numStepProp>=3 } >
        Next
      </button>
     
    </div>

   );
}

export default Buttons;