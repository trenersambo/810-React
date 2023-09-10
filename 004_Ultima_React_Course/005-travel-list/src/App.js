import { useState } from "react"

import "./App.css"
import Form from "./Compon/Form"
import Logo from "./Compon/Logo"
import PackList from "./Compon/PackList"
import Stats from "./Compon/Stats"

function App() {
  // кол-во
  let [number, setNumber] = useState(1)
  let changeNum = (ev) => {
    // console.log(ev)
    setNumber(Number(ev))
  }

  // что кладем в сумку
  let [txt, setTxt] = useState("")
  let changeTxt = (ev) => {
    setTxt(ev)
  }

  // Накопительный Object
  let [bag, setBag] = useState([])
  let arrBag = (newItem) => {
    setBag([...bag, newItem]) // Нов. объект к массиву bag (chatGPT+)
  }

  return (
    <div className="app">
      <Logo />
      <Form
        changeNum={changeNum}
        number={number}
        changeTxt={changeTxt}
        txt={txt}
        arrBag={arrBag}
      />
      <PackList />
      <Stats />
    </div>
  )
}

export default App
