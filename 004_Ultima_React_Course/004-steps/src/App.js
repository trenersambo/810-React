import { useState } from "react"

import Numbers from "./Compon/Numbers"
import Texts from "./Compon/Texts"
import Buttons from "./Compon/Buttons"
import Eye from "./Compon/Eye"

import "./App.css"

function App() {
  let [step, setStep] = useState(1)

  let stepUp = () => {
    setStep(step + 1)
  }
  let stepDown = () => {
    setStep(step - 1)
  }

  let [show, setShow] = useState(true)
  let openClose = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <Eye openCloseProp={openClose} showProp={show} />

      {show && (
        <div className="box-wrapper">
          <Numbers numStepProp={step} />
          <Texts numStepProp={step} />
          <Buttons
            stepUpProp={stepUp}
            stepDownProp={stepDown}
            numStepProp={step}
          />
        </div>
      )}
    </div>
  )
}

export default App
