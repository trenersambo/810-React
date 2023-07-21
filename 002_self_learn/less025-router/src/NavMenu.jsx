import { Link } from "react-router-dom";

function Nav() {
  return ( 
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sambo">Sambo</Link>
        <Link to="/bjj">BJJ</Link>
      </nav>
    </>
   );
}

export default Nav;