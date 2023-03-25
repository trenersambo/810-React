import {Link, Outlet} from 'react-router-dom'

function Povtor() {
  return ( 
  <>
  <h2>Повторение пройденного</h2>

  <nav className="repeat">

  <Link to="/">Home</Link>
  <Link to="/povtor1">Повтор_1</Link>
  <Link to="/povtor2">Повтор_2</Link>

  </nav>

  <Outlet/>
  
  </>
   );
}

export {Povtor} ;