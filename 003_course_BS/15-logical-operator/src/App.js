import {useState} from 'react'

import './App.css';
import MultiBtns from './compon/MultiButtons'
import ResetBtn from './compon/ResetButton'
import ShowPhoto from './compon/ShowPhoto'

function App() {
  let[numPhoto, setNumPhoto] = useState(1)

  return (
    <div className="App">
      <ShowPhoto numPhotoProps = {numPhoto}/>
      <MultiBtns changeNumProp = {setNumPhoto}/>
      <ResetBtn changeNumProp = {setNumPhoto}/>

    </div>
  );
}

export default App;
