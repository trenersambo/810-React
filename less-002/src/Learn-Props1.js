  

export const LearnProps1 =(props)=> {

  let data = props.title ;
  let dataEl = data.map( (el, idx)=> 
  <p key = {idx}>{idx}. {el.name}</p>
  )
 
  return ( 
  <>
     <h3 style={{color:'red'}}>Доп.материал по Props</h3>

     <p>№1. { props.title[0].name }</p>
     <div>{dataEl}</div>
    
 
  </>


   );
}

// export default LearnProps1;