//import { useState } from "react";

function Range({steps, step}) {

  return ( 
  <div className="wrapper">
   
   <input 
   onChange={(ev)=>steps(ev.target.value) }
   type="range" min={0} max={10} defaultValue={step}/>

   <p>Step: {step}</p>
 
  </div>
   );
}

export default Range;