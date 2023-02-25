import './style.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <ul>
      <li>
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
  );
}