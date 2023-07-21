function TryFalse(  props ) {
  let arrProps =  [...props.auto]  
   console.log(arrProps)
  

let txt =  arrProps.map(el=>{
  return(
    <li key={el.name} >
        {el.status 
        ? <h2>У меня тачка {el.name}</h2> 
        : ` ${el.name} не мой а/м  ` }  
    </li>
  )
  })

  return (  
  <> 
    <ul> {txt} </ul> 
  </>
  );
}
export default TryFalse;