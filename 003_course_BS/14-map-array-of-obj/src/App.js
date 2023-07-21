 
import './App.css';

import Person from './compon/Person'
import Persons from './data/persons.json'
 

function App() {
 

  return (
    <div className="App">


    <Person persDataProps = {Persons}/>
    
 
    </div>
  );
}

export default App;
