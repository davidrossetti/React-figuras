import './style.css';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/category/figuras-articuladas">FIGURAS ARTICULADAS</Link></li>
            <li><Link to="/category/figuras-escalas">FIGURAS A ESCALAS</Link></li>


            <li>
                <NavLink 
                    className={({isActive}) =>
                        isActive ? 'active' : 'inactive'
                    }
                    to="/category/merchandising"
                >
                    MERCHANDISING
                </NavLink>    
                    

            </li>
        </ul>
    );
}