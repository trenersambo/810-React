import './style.css'

function LoginForm() {

  let handFormSubmit=(ev)=>{
    ev.preventDefault(); // не перегружает страницу 
    console.log(ev.target)
    console.log(ev.target.username.value) // инфо из input
    console.log(ev.target.password.value) // инфо из input
    
    console.log(
    { Имя_юзера : ev.target.username.value,
     Пароль : ev.target.password.value
    } )

    let msg = JSON.stringify({
      'Имя_юзера': ev.target.username.value,
      'Пароль': ev.target.password.value
    })

    alert( msg  )
  }

  return ( 
  <>
  <h2>Неконтролируемые компоненты</h2>
  <form action="" onSubmit={handFormSubmit}>

    <label htmlFor="">
      UserName:
      <input type="text" name="username" id="user" />
    </label>

    <label htmlFor="">
      Password:
      <input type="password" name="password" id="pass" />
    </label>

    <button type="submit">Log In</button>

  </form>

  </>
   );
}

export default LoginForm;