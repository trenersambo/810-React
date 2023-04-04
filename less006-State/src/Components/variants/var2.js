// import React from "react";
// import { useState } from "react";

// function Var2() {
//   let [obj, setObj] = useState({ id: "100", spec: "frontend" });

//   const showObj = () => 
//   {
//     setObj({ ...obj, title: "react" });
    
//     console.log(obj); 
//     //Object: {id: '100', spec: 'frontend', title: 'react'}

//     let testValue = Object.values(obj);
    
//     console.log(testValue); 
//     // Array: ['100', 'frontend', 'react']
//   };

//   return (
//     <>
//       <button onClick={showObj}>вывод в консоль </button>
 
//     </>

//   );
// }

// export { Var2 };






import React from "react";
import { useState } from "react";

function Var2() {
  let [obj, setObj] = useState({ id: "100", spec: "frontend" });

  const showObj = () => {
    setObj({ ...obj, title: "react" });

    console.log(obj); //Object: {id: '100', spec: 'frontend', title: 'react'}
  };

  return (
    <>
      <button onClick={showObj}>Добавить 1 слово </button>

      <div>
        {Object.values(obj).map((el, idx) => (
          <h4 key={idx.toString()}>{el}</h4>
        ))}
      </div>
    </>
  );
}

export { Var2 };

