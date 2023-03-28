import {Link, Outlet} from 'react-router-dom';
import './var.css'

function AllVar() {
  return (  
  <>

 <div className='top'>

   <Link to = "/">Вар.№1 </Link>
  <Link to = "/var2">Вар.№2 </Link>
  <Link to = "/var3">Вар.№3 </Link>

 </div>

 
  

  <Outlet/>

  </>
  );
}

export default AllVar;