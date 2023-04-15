import { useState } from "react";

export function RadioBtn() {
  const [radio, setRadio] = useState("bjj");
  const arr = ["sambo", "judo", "bjj", "box"];
 

  const handleChange = (event) => {
    setRadio(event.target.value);
    console.log('Выбран:' + event.target.value)
  };

  const radioButtons = arr.map((el) => (
  
      <label key={el}>
        <input
          type="radio"
          value={el}
          checked={radio === el}
          onChange={handleChange}
        />
        {el}
      </label>
 
  ));

  return (
  <>
  {radioButtons}
  <p>Ты выбрал: {radio}</p>
  </>
  );
}                       
