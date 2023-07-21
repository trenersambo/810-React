import ComponTxt2 from './ComponTxt2'
console.log('Компонент ComponTxt.js ')

function text() {

  return ( 
    <>
      <h2>Борись и не сдавайся</h2>
      
      <div className="second">
      это второй проект на React
      </div>

      <ComponTxt2/>
    </>
   );
}

export default text;