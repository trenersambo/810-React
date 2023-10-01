function Stats( {bag}) {
  let totalItem = bag.length 

  if(bag.length===0){
    return <div className="stats">
      <h2>Э, я не понял! Сумка все еще пустая !?</h2>
    </div>
  }

  return ( 
  <footer className="stats">
   { bag.length <=3 && 
   <div>
      <h4>Уже лучше!</h4>
      <p>Для тренировки полжено в сумку, вещей: {totalItem}</p>
    </div> }

    { bag.length>=4 && <h4>Выдвигайся на тренировку!</h4>  }
    
  </footer>
   );
}

export default Stats;