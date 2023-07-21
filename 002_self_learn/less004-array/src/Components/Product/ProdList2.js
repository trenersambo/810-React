import Prod2 from "./Prod2";

function prodList2({sportArr}) {
  return ( 
  <>
  <h3>Вариант-2.1: map --> props</h3>

  <ul>
      {sportArr.map(el=>(
        <li key={el.top}>
          <Prod2 sportName={el.name}/>
        </li>
      )       )}
  </ul>

  
  </>
   );
}

export default prodList2;
 