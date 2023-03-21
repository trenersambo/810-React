import{Link, Outlet} from 'react-router-dom' ;
import './Layout.css'

const Layout = () => {
  return ( 
  <>

        <header className='nav_div'>

          <Link to = "/" >Home</Link>
          <Link to = "/about" >About</Link>
          <Link to = "/users" >Users</Link>

        </header>  


        <Outlet/>

        <footer className='footer'>2023 год</footer>
     
  </>


   );
}

export {Layout};