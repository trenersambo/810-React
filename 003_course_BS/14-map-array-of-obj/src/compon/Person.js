import './person.css'

function Person({ persDataProps}) {
  //console.log(persDataProps[0])

  let persTxt = persDataProps.map(el=>{
    //console.log(el)
    let {
    id:id, 
    firstName: first, 
    lastName: last,
    email: mail,
    img: img
    } = el
    
    
    return (
    <div key={id} className='cardPerson'>
    <h3> {first} {last} </h3>
    <h4>{mail}</h4>
    <img src={img} alt="" />
    </div>
    
    )
  })

  return ( 
  <>
    <h2>props из json-данных</h2>
    <div>{persTxt} </div>
  </>
   );
}

export default Person;