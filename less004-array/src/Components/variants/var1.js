import ProdList from "../Product/ProdList1";

function Var1() {

  const arr =  [
  {id:'id-1', name: "Sambo"},
  {id:'id-2', name: "BJJ"},  
  ]


  return ( 
  <>
    <p>Вариант #1 работы с массивами в React</p>
  <ProdList sportArr = {arr}/>
  </>

   );
}

export default Var1;