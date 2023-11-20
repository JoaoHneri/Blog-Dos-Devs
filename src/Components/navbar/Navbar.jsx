import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className="brand">
            Rede dos <span>Devs</span>
        </NavLink>
        <ul className="links_list">
            <li>
        <NavLink to="/">
            Home
        </NavLink>
            </li>
            <li>
        <NavLink to="/Login">
            Entrar
        </NavLink>
            </li>
            <li>
        <NavLink to="/register">
            Registrar
        </NavLink>
            </li>
            <li>
        <NavLink to="/About">
            Sobre
        </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
