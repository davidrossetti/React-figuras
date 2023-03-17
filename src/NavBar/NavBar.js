import './style.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../components/CartWidget/CartWidget';

const NavBar = () => {
 
  return (
    <div>
       <ul>
        <li>e
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            INICIO
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/category/figura articulada"
          >
            FIGURAS ARTICULADAS
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/category/figura a escala"
          >
            FIGURA A ESCALAS
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/category/merchandising"
          >
            MERCHANDISING
          </NavLink>
        </li>
      </ul>
      <div>
      
      </div>
    </div>
  )
}

export default NavBar




