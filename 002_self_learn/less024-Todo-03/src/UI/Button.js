//Универсальный компонент - КНОПКА

import style from './button.module.css'

function Button({children, onClick, title, disabled}) {
  return ( 
  
  <>
    <button 
    className={style.btn}
    onClick={onClick}
    title={title}
    disabled={disabled}
    >
      {children}
    </button>
  </>

   );
}

export default Button;