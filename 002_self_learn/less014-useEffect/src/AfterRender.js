
// import { useEffect } from "react";

// function AfterRender() {
//   useEffect(() => {
//     let trgt = document.querySelector("#target");
//     console.log(trgt);
//   });

//   return (
//   <p id="target">Пример#1 на пост-рендеринг</p>
//   );
// }
// 


import { useEffect } from "react";

function AfterRender() {
  useEffect(() => {
   // console.log("Effect executed on component mount");
    return (  ) => {
   //  console.log("Effect executed on component unmount");
    };
  }, [] );

  return <h1>Пример№1 с пустым массивом зависимостей</h1>;
}
export default AfterRender;