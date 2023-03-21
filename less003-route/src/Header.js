// вариант для MPA
 // Навигация вверху: Home About Users

import './Header.css'

function Header() {
  return ( 
    <>
    
    <nav className='nav_div'>

      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/users">Users</a>
    
    </nav>

    </>
   );
}

export default Header;