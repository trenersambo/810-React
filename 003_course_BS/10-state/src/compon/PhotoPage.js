function PhotoShowPage(props) {
  let numPhoto = props.numPhotoProps
  console.log(numPhoto) 

  return ( 
  <>
  <p>показ фото</p>
  <img src={`img/${numPhoto}.jpg`}  alt="" />
  </>
   );
}

export default PhotoShowPage;