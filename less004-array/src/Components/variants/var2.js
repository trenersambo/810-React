import ProdList from "../Product/ProdList2";

function Var2() {

  const arr =  [
  {top:'top#1', name: "Sambo"},
  {top:'top№2', name: "BJJ"},  
  ]

  return ( 
  <>
    <p>Вариант #2 работы с массивами в React</p>
  <ProdList sportArr = {arr}/>
  </>

   );
}

export  {Var2};