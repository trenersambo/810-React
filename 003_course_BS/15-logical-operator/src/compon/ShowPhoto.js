
import './Style.css' 


function ShowPhoto({numPhotoProps:num}) {

  let textStyle = null ;
  if(num===4) {textStyle='greenDiv'}

  return ( 
  <>
   <div className={textStyle}>Фото № {num}</div> 

   <img src={`img/${num}.jpg`} alt="" />
 
  </>
   );
}

export default ShowPhoto;