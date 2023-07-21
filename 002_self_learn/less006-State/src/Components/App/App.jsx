import {Routes, Route} from 'react-router-dom'
import './App.css';

import AllVar from '../variants/all';
import Var1 from '../variants/var1'
import {Var2} from '../variants/var2'
import {Var3} from '../variants/var3'

function App() {
  return (
    <div className="App">
      <h2 className='topTheme'>
      Тема-6: React State (введение)
      </h2>
      
      <header className="App-header">

  <Routes>
    <Route path="/" element = {<AllVar/>}>
    
       <Route index element = {<Var1/>}/> 
       <Route path='var2' element={<Var2/>}/>
       <Route path='var3' element={<Var3 txt={'Это_props'}/>}/>

    </Route>  
  </Routes>
 
      </header>

    </div>
  );
}

export default App;
