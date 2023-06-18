import './footer.css'

let Footer=()=>{
  let year =new Date().getFullYear()
  return(
    <footer className="footer-wrapper">
     <p>{year}</p>
    </footer>
  
  )

}

export default Footer