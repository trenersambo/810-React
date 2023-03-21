import {  Routes, Route } from 'react-router-dom' ; 

import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import Error from './pages/ErrorPage';
import { Layout } from './Components/Layout';

function App() {
  return (
    < >

      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>            

      </Routes> 

    </ >
  );
}

export default App;
