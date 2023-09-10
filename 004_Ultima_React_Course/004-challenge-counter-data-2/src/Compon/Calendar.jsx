
function Calendar({ num}) {
 console.log('в Клендарь пришёл: ' +num)
  
  // Получение текущей даты
const date1 = new Date();
//console.log(date1);

// +/- X дней к текущей дате
  let date2 = new Date(date1);
   date2.setDate(date2.getDate() + num);

//console.log(date2)

  return ( 
  <>
   <p>{ date2.toUTCString().slice(0, -12)}</p>
 
  </>
   );
}

export default Calendar;


  // let date = new Date().toISOString() //2023-08-21T18:40:28.819Z
  // let date = new Date().toUTCString() // Mon, 21 Aug 2023 18:41:15 GMT
  // let date = new Date().toUTCString().slice(0, -12) // Mon, 21 Aug 2023

  // let date = new Date().toLocaleDateString() // 21.08.2023
  // let date = new Date().toLocaleString() // 21.08.2023, 21:46:54
