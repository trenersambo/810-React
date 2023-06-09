 
import './App.css';
import TrueFalse from './Compon/TrueFalse' ;
import ToggleCmpnt from './Compon/Toggle' ;
import ShowList from './Compon/ShowList' ;
import InputText from './Compon/InputTxt' ;
import {Checkbox} from './Compon/Checkbox' ;
import {RadioBtn} from './Compon/RadioButton' ;
import {SelectEl} from './Compon/Select' ;
import ToggleBtn from './Compon/ToggleBtn' ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <TrueFalse/>
         <ToggleCmpnt/>
         <ShowList/>
         <InputText/>
         <Checkbox/>
         <RadioBtn/>
         <SelectEl/>
         <ToggleBtn/>
      </header>
    </div>
  );
}

export default App;
