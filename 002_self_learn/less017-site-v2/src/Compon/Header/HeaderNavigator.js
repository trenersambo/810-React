import style from './header.module.css'

const HeaderNav=()=>{
let navLinks = [

  {link: 'https://learn.javascript.ru/'},
  {link: 'https://www.google.ru/'},
  {link: 'https://doka.guide/'},

]

let navLinsArr = navLinks.map((el, idx)=>{
 // console.log(el.link)
  return <div key={idx} className={style.link}>
            <a href={el.link} 
            >Ссылка№ {idx+1}</a>
          </div>

})

 

return(
  <nav className={style.navLinks} >
    {navLinsArr}  
  </nav>

  

)

}

export default HeaderNav