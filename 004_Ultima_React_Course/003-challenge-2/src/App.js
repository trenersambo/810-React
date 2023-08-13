import Descr from "./Compon/Descr"
import Skills from "./Compon/Skills"
import Foto from "./Compon/FotoTop"

import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="skill-wrap">
        <Foto />
        <Descr />
        <Skills />
      </div>
    </div>
  )
}

export default App
