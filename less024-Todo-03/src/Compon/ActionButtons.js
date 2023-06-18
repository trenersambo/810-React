//Импорт Универсальн. компонента - КНОПКА
import Button from '../UI/Button'

//Импорт иконок для кнопок
import{RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'

import style from './actBtns.module.css'

function ActionsButtons() {
  return ( 

  <div  >

    <Button title={'Удалить все задачи'}>
      Reset all tasks
      < RiRefreshLine className={style.icon}/> 
     </Button>

    <Button title={'Удалить исполненные задачи'}>
      Delete complite
      < RiDeleteBin2Line  className={style.icon}/> 
    </Button>  

  </div>
 

   );
}

export default ActionsButtons;