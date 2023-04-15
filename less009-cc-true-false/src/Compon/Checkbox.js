import { useState } from "react";
import "./style.css";

export function Checkbox() {
  let [check, setCheck] = useState(true);

  let txt = "Видимый текст";

  let changeCheck = () => {
    setCheck(!check);
  };

  return (
    <>
      <input type="checkbox" 
      checked={check} onChange={changeCheck} />

      //тут текст появляется / исчезает
      {check && <h3>{txt}</h3>} 
    </>
  );
}
