//вариант не популярный (при тысячах массивах !?)

function prodList1({sportArr}) {
  return ( 
  <>
  <h3>1 Вариант через [индекс] (решение в лоб)</h3>
  <ul>
    <li>{sportArr[0].id}</li>
    <li>{sportArr[0].name}</li>
  </ul>
  
  </>
   );
}

export default prodList1;

// строка 2:  {sportArr} - деструкутризация
