import {Outlet} from 'react-router-dom'
import Menu from './NavMenu'

function MainLayout() {
  return ( 

  <>
    <Menu/>
    <Outlet/>
  </>

   );
}

export default MainLayout;