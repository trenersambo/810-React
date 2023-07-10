import { BrowserRouter,Routes,  Route } from 'react-router-dom';

import Trening from './Trening'
import TreningSingle from './TreningSingle'

import Notfound from './NotFound'
import Home from './Home'
import MainLayout from './MainLayout';

import './index.css';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">

        <Routes >
          <Route path='/' element={<MainLayout/>}>
            <Route index element={ <Home/>}/>
            <Route path='trening' element={ <Trening/>}/>
            <Route path='trening/:sport' element={ <TreningSingle/>}/>

            <Route path='*' element={ <Notfound/> }/>  
          </Route>
        </Routes>

      </div>    
    </BrowserRouter>

  );
} 

export default App;
