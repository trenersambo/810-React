 
import './App.css';
import AfterRender from './AfterRender'
import {OneRender} from './OnlyOneRender'
import {ResizeWindow} from './ResizeWindow'

function App() {
  return (
    <div className="App">

        <AfterRender/>
        <OneRender/>
        <ResizeWindow/>
 
    </div>
  );
}

export default App;
