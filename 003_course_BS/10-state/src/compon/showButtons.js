import './style.css'

function ShowButtons({sport, changeNameProp}) {
 //console.log(sport)


  return ( 
  <>
    <button onClick={changeNameProp}>
      {sport.name}
    </button>
  </>
   );
}

export default ShowButtons;