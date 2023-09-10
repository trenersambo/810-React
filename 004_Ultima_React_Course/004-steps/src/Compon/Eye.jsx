import {PiEyeBold, PiEyeClosedBold} from 'react-icons/pi'

function Eye({openCloseProp, showProp}) {
console.log(showProp)
  return (  
  <>
   {showProp === false && <PiEyeBold onClick={openCloseProp}/>}
   {showProp === true && <PiEyeClosedBold  onClick={openCloseProp}/>}
  </>
  );
}
 

export default Eye;