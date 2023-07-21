
import './Style.css' 

function ResetBtn({ changeNumProp }) {
//эта ф-ция не дает автовыполниться коду до момента клика на кнопку
    const btnClick = () => {
    changeNumProp(4);
  };

  return ( 
  <>
    <p>Перезагрузка</p>
    <button
      onClick={btnClick}
    >
      Reset
    </button>
  </>
   );
}

export default ResetBtn;