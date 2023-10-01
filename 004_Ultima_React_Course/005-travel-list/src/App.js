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

  // удаление из списка 
  let deleteItem=(id)=>{
    setBag(bag.filter((elm)=>elm.id !=id))
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
      <PackList bag={bag} deleteItem={deleteItem} />
      <Stats bag={bag}/>
    </div>
  )
}

export default App
