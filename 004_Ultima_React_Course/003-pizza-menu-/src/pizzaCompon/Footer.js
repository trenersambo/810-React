function Footer() {
  const hour = new Date().getHours() // Текущю время: ЧАС
  console.log(hour)
  const openHour = 8
  const closeHour = 22
  const open = hour >= openHour && hour <= closeHour

  return (
    <>
      <footer className="footer">
        {open ? (
          <div className="order">
            <p>
              Друг! Ждем твой заказ с {openHour}:00 до {closeHour}:00
            </p>
            <button className="btn">Заказ</button>
          </div>
        ) : (
          <p>Сорян, мы можем принять заказ с {openHour}:00 </p>
        )}
      </footer>
    </>
  )
}

export default Footer
