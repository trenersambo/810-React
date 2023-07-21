import {Link, Outlet} from 'react-router-dom';
import '../App/App.css';

function AllVar() {
  return (  
  <>
 <div className="top_nav">

   <Link to = "/">1. React State
    (Канал Лущенко, 30:15) </Link>

  <Link to = "/var2">Вар.№2 </Link>
  <Link to = "/var3">Вар.№3 </Link>
  
 </div>

 
  <Outlet/>
  
  </>
  );
}

export default AllVar;