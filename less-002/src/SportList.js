import './SportList.css' ;
function SportList(props) {
  return ( 

    <div className="sport-cart">

      <h3>{props.nameEl}</h3>
      <p>{props.descrEl}</p>
      <img src={`/img/${props.imgEl}`} 
      alt={props.descrEl}
      className='foto_sport'/>

    </div>
  
   );
}

export default SportList;