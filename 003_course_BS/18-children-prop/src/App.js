 
import Wrap from './compon/Wrapper'
import './App.css';
 

function App() {
  return (
    <div className="App">
 
  <Wrap>
 
      <h2>Карта Борца Sambo</h2>
      <p>Четкий борцуха</p>
      <button>Победа</button>
 
  </Wrap>

  <Wrap color = 'lightgreen'>
 
      <h2>Карта Борца BJJ</h2>
      <p>Shut up & Roll</p>
 
  </Wrap>


    </div>
  );
}

export default App;
