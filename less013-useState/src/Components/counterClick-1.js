import "./style.css";

import { useState, UseState } from "react";

function CountClicks() {
  let [click, setClick] = useState(0);

  let countClicked = () => {
    setClick(click + 1);
  };
  return (
    <>
      <p>Пример №1. UseState для счёта кликов</p>

      <button onClick={countClicked}>
        Меня нажали {click} раз
      </button>
    </>
  );
}

export default CountClicks;
