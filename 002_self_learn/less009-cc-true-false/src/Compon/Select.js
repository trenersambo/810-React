import { useState } from "react";

export function SelectEl() {
  const [val, setVal] = useState("sambo");
  const arr = ["sambo", "judo", "bjj", "box"];

  let valueEl = arr.map((el) => {
    return (
      <option value={el} key={el}>
        {el}
      </option>
    );
  });

  let handChange = (ev) => {
    //чтоб в окне зафискировалось значение
    setVal(ev.target.value);
    console.log(ev.target.value);
  };

  // для показа фразы "Че, самбист..." (смена классов CSS)
  let showSambo = (val==="sambo")? 'show' : 'dontShow'

  return (
    <>
      <select value={val} onChange={handChange}>
        {valueEl}
      </select>

      <h3>Выбрано из списка: {val}</h3>

      <h2 className={showSambo}>Че,самбист? красава!</h2> 
    </>
  );
}
