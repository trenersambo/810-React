import { useState } from "react"

import Cards from "./Compon/Cards"
import quest from "./data"
import "./App.css"

function App() {
  let [idCard, setIdCard] = useState(null)

  function idClick(id) {
    setIdCard(id !== idCard ? id : null)
  }

  return (
    <div className="flashcards">
      {quest.map((el) => (
        <Cards key={el.id} el={el} idClick={idClick} idCard={idCard} />
      ))}
    </div>
  )
}

export default App
