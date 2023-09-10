import { useState } from "react"
import Step from "./Compon/Step"
import Count from "./Compon/Count"
import Calendar from "./Compon/Calendar"

import "./App.css"

function App() {
  let [step, setStep] = useState(1)

  let stepMinus = () => {
    setStep(step - 1)
  }
  let stepPlus = () => {
    setStep(step + 1)
  }

  let [count, setCount] = useState(0)

  let countDown = () => {
    setCount(count - step)
  }

  let countUp = () => {
    setCount(count + step)
  }

  return (
    <div className="App">
      <Step stepMinus={stepMinus} stepPlus={stepPlus} step={step} />
      <Count countDown={countDown} countUp={countUp} count={count} />
      <Calendar count={count} />
    </div>
  )
}

export default App
