import Pizza from "./Pizza"

import pizzaData from "./data"

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((el, idx) => {
          return <Pizza elProps={el} key={idx} />
        })}
      </ul>
    </main>
  )
}

export default Menu
