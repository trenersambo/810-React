
function CompTxt(props) {

  let data = props.dataArr.arr;
  let listEl = data.map( item => 
    <li key={item.id}>
      <a href={item.id}>{item.sport}</a>
    </li>
  );

  return ( 
    <>
      <p>
      Вывод списка из массива, 
      переданного props из App.js
      </p>

      <ul>
        {listEl}
      </ul>
    </>
   )

}

export default CompTxt;