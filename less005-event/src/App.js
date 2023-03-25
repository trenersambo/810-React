

import './App.css';
import TestBtn from './page/Button';
import TestRef from './page/TestRef';


import {  Routes, Route } from 'react-router-dom'
import {Povtor} from './page/Povtor001'
import Home from './page/Home'
import Povtor1 from './page/Povtor1'
import Povtor2 from './page/Povtor2'
import Err from './page/Err'




let obj = {
'name': "BJJ",
"top": "Russia"
}

function App() {
  return (
    <div className="App">
        <TestBtn data={obj}/>
        <TestRef/>

<Routes>

  <Route path = '/' element={<Povtor/>}>
    <Route index element = {<Home/>}/> 
    <Route path = "povtor1" element= {<Povtor1/>}/> 
    <Route path = "povtor2" element= {<Povtor2/>}/> 
    <Route path = "*" element={<Err/>}/> 
  </Route>

</Routes>

                     
    </div>
  );
}

export default App;
