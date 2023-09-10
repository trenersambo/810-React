import { useState } from "react"
import Range from "./Compon/Range"
import Count from "./Compon/Count"
import Calendar from "./Compon/Calendar"
import "./App.css"

function App() {
  let [step, setStep] = useState(1)
  let steps = (st) => {
    console.log("Пришло в ф-ию steps:" + st)
    setStep(st)
  }

  let [num, setNum] = useState(0)
  let countDown = () => {
    setNum(num - Number(step))
  }
  let countUp = () => {
    setNum(num + Number(step))
  }

  return (
    <div className="App">
      <Range steps={steps} step={step} />

      <Count
        step={step}
        num={num}
        countDown={countDown}
        countUp={countUp}
        setNum={setNum}
      />

      <Calendar num={num} />
    </div>
  )
}

export default App
