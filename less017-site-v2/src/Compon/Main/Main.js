import './main.css'
import Posts from '../Post/Posts'
const Main=()=>{

  return(

  <main className="main">

      <p className='main-top-txt' >Main contents</p>
      
        <div className="main-posts-flex">
           <Posts/>
        </div>

  
  </main>
 


  )
}

export default Main;