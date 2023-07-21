import "./App.css";
import LikeSport from "./Components/MySport";
import MyStack from "./Components/MyStack";
import TryFalse from './Components/TrueAndFalse'

function App() {
  let arr = ["JavaScript", "ReactJS"];

  let auto = [
  {name: 'Aurus', status: false},
  {name: 'BMW', status: true},
  {name: 'WV', status: false},  
  ]
    
 
  return (
    <div className="App">
      <header className="App-header">
        <LikeSport v={"Sambo"} v2="BJJ" />
        <MyStack s={arr} />

        <TryFalse auto = {auto} />

      </header>
    </div>
  );
}

export default App;
