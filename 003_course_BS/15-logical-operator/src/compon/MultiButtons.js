
import './Style.css' 

let nameBtns = ['Фото№1', 'Photo №2', 'Фото№3']

function MultiBtns({ changeNumProp }) {
//эта ф-ция не дает автовыполниться коду до момента клика на кнопку
    const btnClick = (idx) => {
    changeNumProp(idx);
  };

//перебор map для отрисовки ТРЕХ кнопок
  const showBtnsName = nameBtns.map((el, idx) => {
    return (
      <button key={el} 
      onClick={() => btnClick(idx + 1)}>
          {el}
      </button>
    );
  });

  return (
    <>
      <p>Мультикнопки</p>
      {showBtnsName}
    </>
  );
}


export default MultiBtns;