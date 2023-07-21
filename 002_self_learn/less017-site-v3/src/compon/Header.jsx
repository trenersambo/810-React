
import './style.css'

function Header() {
  return ( 
  <header>

  < div className="header-top">

    <img src="../img/dream.svg" alt="logo" className="logo" />
    
    <div className="header-menu">
      <a href='#'className='hm-link'>О нас</a>
      <a href='#'className='hm-link'>Миссия</a>
      <a href='#'className='hm-link'>Создать мечту</a>
    </div>

  </div>

  </header>
   );
}

export default Header;