function Pizza({ elProps }) {
  // console.log(elProps)
  return (
    <li className={elProps.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={`../img/${elProps.photoName}`} alt={elProps.photoName} />

      <div className="div">
        <h3>{elProps.name}</h3>

        <p>{elProps.ingredients}</p>

        <span>{elProps.soldOut ? "Все распродано" : elProps.price}</span>
      </div>
    </li>
  )
}

export default Pizza
