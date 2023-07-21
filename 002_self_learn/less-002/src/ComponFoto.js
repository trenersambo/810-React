import foto from './img/judo2.jpg'
 

function ComponFoto(props) {

  return ( 
    <>
      <img src={foto} alt="" />
      <p>{props.data.firstTxt}</p>
      <p>{props.data.secondTxt}</p>
    </>
   );
}

export default ComponFoto;