function Form({changeNum, number, changeTxt, txt, arrBag}) {
  
  let formSubmit = (ev)=>{
     //console.log(ev.target[0].value, ev.target[1] )
    ev.preventDefault()

    if(!txt) return

    let newItem={
      number: number,
      txt: txt, 
      packed:false, 
      id: Date.now()
    }
    //console.log(newItem)
    arrBag(newItem)

    changeNum(1);
    changeTxt(""); 
   }

  return ( 
  <div className="add-form">
    <h3>Что надо взять на тренировку?  </h3>

    <form action="" method="get" onSubmit={ formSubmit }>

       <select
          value={number}
          onChange={(ev)=>changeNum(ev.target.value)}
        >
        { Array.from( {length: 10}, (_, idx)=>idx+1) 
          .map((num)=>(
            <option value={num} key={num}>
              {num}
            </option>
          )) }
       </select>

 

       <input type="text" 
          value={txt}
          onChange={(ev)=>changeTxt(ev.target.value)}
       />

       <button type="submit">in the bag</button>
    </form>

  </div>
   );
}

export default Form;