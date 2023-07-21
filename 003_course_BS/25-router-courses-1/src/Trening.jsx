
import { Link } from 'react-router-dom';
import sportData from './data/dataSport'
 

function Trening() {

//console.log(sportData)

  return ( 
  <>

    <h2>Расписание Тренировок</h2>
    {sportData.map((el)=> (
      <div className="trening" key={el.id}>
        <Link to={el.sport} >{el.name}</Link>     
      </div>
   
    )
   ) }

  </>
   );
}

export default Trening;