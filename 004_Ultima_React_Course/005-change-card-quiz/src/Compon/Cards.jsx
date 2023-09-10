function Cards({el, idClick, idCard}) {
console.log(el)

  return (  
    <div 
    className={el.id===idCard ? "selected": ''}
    onClick={()=>idClick(el.id)}
    >
      <p>{el.id === idCard ? el.answer : el.question}</p>
    </div>
  );
}

export default Cards;