import "./style.css";

import { useState } from "react";

function Multi() {
  let [click1, setClick1] = useState(0);
  let [click2, setClick2] = useState(0);

  let countClicked1 = () => {
    setClick1(click1 + 1);
  };

  let countClicked2 = () => {
    setClick2(click2 + 1);
  };

  return (
    <>
      <p>Пример №2. UseState для счёта кликов</p>

      <button onClick={countClicked1}>
        №1 нажата {click1} раз
      </button>

      <button onClick={countClicked2}>
        №2 нажата {click2} раз
      </button>
    </>
  );
}

export default Multi;
