import { useState } from "react";

// Состояния надписи и стиля
function ToggleBtn() {
  const [change, setChange] = useState("Сделай Жмяк!");
  const [stl, setStl] = useState(null);

// Ф-ция смены надписи и стиля кнопки 
  let changeBtn = () => {
    change === "Сделай Жмяк!"
      ? setChange("Жмяк сделан!")
      : setChange("Сделай Жмяк!");

    stl === null ? setStl("newStyle") : setStl(null);
  };

  return (
    <>
      <h2>Смена надписи в кнопке и стиля при клике</h2>
      <button className={stl} onClick={changeBtn}>
        {change}
      </button>
    </>
  );
}
export default ToggleBtn;
