function TrueFalse() {
  let part = null;
  const foo = () => {
    const valueRandom = Math.random() > Math.random();

    return valueRandom ? (part = <h3>True</h3>) : (part = <h3>False</h3>);
  };

  return (
    <>
      <p>№1. Вернуть True или False</p>

      <div>{foo()} </div>
      {/* <div>{ valueRandom?  <p>true</p>: <p>false</p>}</div> */}
 
    </>
  );
}

export default TrueFalse;
