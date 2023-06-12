import './index.css'
 
import { useEffect, useState } from "react";

export function ResizeWindow() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    // Обработчик события
    const handleEvent = (event) => {
      setEventData(event);

    };

    // Подписываемся на событие
    window.addEventListener("resize", handleEvent);

    // Отписываемся от события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleEvent);
    };
  }, []);

  return (
    <div>
      <h2>Событие: {eventData ? eventData.type : "Нет данных"}</h2>
      <p>Ширина окна: {eventData ? eventData.target.innerWidth : "Нет данных"}</p>
      <p>Высота окна: {eventData ? eventData.target.innerHeight : "Нет данных"}</p>
    </div>
  );
}

 

