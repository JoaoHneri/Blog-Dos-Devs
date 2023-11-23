import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../../hooks/useAuth"
import { useAuthValue } from "../../context/AuthContext"

const Navbar = () => {
    const {user} = useAuthValue();


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
            {!user && (<>
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
            
            </>)}
            {user && (<>
                <li>
        <NavLink to="/posts/Create">
            Novo Post
        </NavLink>
            </li>
            <li>
        <NavLink to="/dashboard">
           Dashboard
        </NavLink>
            </li>
            
            </>)}
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
