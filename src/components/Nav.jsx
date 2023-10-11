// npm modules
import { NavLink } from "react-router-dom"



const NavBar = () => {
  return (  
    <nav>
    <NavLink to="/">Home Page</NavLink>
    <NavLink to="/movies">All Movies</NavLink>
    </nav>

  )
}

export default NavBar