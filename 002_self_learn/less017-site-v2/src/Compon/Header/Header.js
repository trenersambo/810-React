import HeaderNav from './HeaderNavigator'
import style from './header.module.css'

const Header=()=>{

return(
<header className= {style.header} >
  <h3>Необычный сайт</h3>
  <HeaderNav/>
</header>


)

}

export default Header