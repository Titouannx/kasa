// import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css'
import logo from '../assets/logo.svg'
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <header>
                <div>
                    <img src={logo} alt='logo KASA' className='kasa-logo'></img>
                </div>
                <div>
                    <nav>
                        <ul className='nav-list'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-btn active-page' : 'menu-btn')}>Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'menu-btn active-page' : 'menu-btn')}>A propos</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
      );
}

export default Header