import "./style.css";
import { useState } from "react";

function ToggleCmpnt() {
  let [show, SetShow] = useState(true);

  let txt = null;

  const showFunc = () => {
    SetShow(!show);
  };

  // сработает только за пределами ф-ции showFunc!
  // причина: асинхронн.работа React
  if (show) {
    txt = <p>Видим (вар 2)</p>;
  }

  return (
    <>
      <p>№2. Элемент должен исчезать/появляться</p>

      <button onClick={showFunc}>Показать/убрать</button>
      <div>
        Видимость текста№1: {show ? <p>Видим (вар1)</p> : null} <br />
        Видимость текста№2: {txt}
      </div>
    </>
  );
}

export default ToggleCmpnt;
