import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className="brand">
            Rede dos <span>Blog</span>
        </NavLink>
        <ul className="links_list">
            <li>
        <NavLink to="/Home">
            Home
        </NavLink>
            </li>
            <li>
        <NavLink to="/About">
            About
        </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
