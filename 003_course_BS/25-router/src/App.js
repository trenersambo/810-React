import { BrowserRouter,Routes,  Route } from 'react-router-dom';

import Sambo from './Sambo'
import Bjj from './Bjj'
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
            <Route index={true} element={ <Home/>}/>
            <Route path='sambo' element={ <Sambo/>}/>
            <Route path='bjj' element={ <Bjj/>}/>
            <Route path='*' element={ <Notfound/> }/>  
          </Route>


        </Routes>

      </div>    
    </BrowserRouter>

  );
} 

export default App;
