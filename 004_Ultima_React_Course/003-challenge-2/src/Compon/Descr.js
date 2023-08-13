import { useState } from "react"
function Descr() {
  let [translit, setTranslit] = useState(true)
  console.log(translit)
  return (
    <div className="descr">
      <p className={translit ? "descr-eng" : "descr-eng showHidden"}>
        Hi brother! You are on the page of the web developer Dmitry Enot
        Frontend Sr. I love programming in Javascript & React, I like to ride a
        bike on the highway and wrestle on the tatami in the Brazilian jiujitsu
        club (BJJ). When I'm not coding or exercising, then I like to study,
        cook (and eat) or just enjoy the Brazilian sun on the beach.
      </p>

      <p className={!translit ? "descr-ru" : "descr-ru showHidden"}>
        Привет, брат! Ты на странице веб-разработчика дед Митяй aka Енот
        Фронтенд-старший. Люблю программировать на Javascript & React , нравится
        гонять на вело (гревел) по шоссе и борьться на татами в клубе
        бразильского джиуджитсу (BJJ). Когда я не программирую и не
        тренируюсь,тогда я люблю что-нибудь изучать, готовить (и есть) или
        просто наслаждаться бразильским солнцем на пляже.
      </p>

      <button className=" btn translit" onClick={() => setTranslit(!translit)}>
        Русский / Eng
      </button>
    </div>
  )
}

export default Descr
