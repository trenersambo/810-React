

function ShowList() {

  const list=[
  {id: 1, name:"Frontend", stack:"HTML" },
  {id: 23, name:"Frontend", stack:"CSS" },
  {id: 3, name:"Backend", stack:"Python" },
  {id: 6, name:"Frontend", stack:"JS" },
  {id: 7, name:"Frontend", stack:"React" }
  ]

  // вызов ф-ции (тест - что внутри innerHTML)
  let foo=(ev)=>{
    console.log(ev.currentTarget.innerHTML)
  }

  let lisEl = list.map((el, idx)=>{
    //задано условие для смены стиля
    let elm = idx%2===0 ;

    // нов.стиль для элементов с чётным индексом
    let  newStyle = {}
    
    if (elm){
      newStyle = {
      backgroundColor: "red",
      fontSize: "50px"
      }
    }
    // готовые для рендера
    return <li key={el.id} 
    style={newStyle} // применить стиль по услоивю
    onMouseEnter={foo} > 
      {el.stack}
    </li>
  }
  )
 
  return ( 
  <>
    <h3>React10. Рендер списка. </h3>

    <ul > {lisEl} </ul>

  </>
   );
}

export default ShowList;
