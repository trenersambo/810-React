function Numbers({numStepProp: num}) {
  return ( 
  <>
    <div className="num-wrapper">
      <div className={num >= 1 ? "nmbr nmbrColor" : "nmbr"}>1</div>
      <div className={num >= 2 ? "nmbr nmbrColor" : "nmbr"}>2</div>
      <div className={num >= 3 ? "nmbr nmbrColor" : "nmbr"}>3</div>
    </div>
  </>
   );
}

export default Numbers;