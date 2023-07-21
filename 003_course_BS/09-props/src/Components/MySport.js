// вариант №1 (прием props)
// function LikeSport(props) {
//   console.log(props.v )
//   return ( 
//   <>
//   <p>Твой спорт - {props.v }</p>
//   <p>И еще  - {props.v2}</p>
//   </>
//    );
// }
// export default LikeSport;


// вариант №2 (прием props)

function LikeSport({v, v2}) {
 
  return ( 
  <>
  <p>Твой спорт - { v }</p>
  <p>И еще  - { v2}</p>
  </>
   );
}
export default LikeSport;
