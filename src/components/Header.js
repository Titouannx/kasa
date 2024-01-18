import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css'
import logo from '../assets/logo.svg'

function Header() {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    }

    return (
        <header>
                <div>
                    <img src={logo} alt='logo KASA' className='kasa-logo'></img>
                </div>
                <div>
                    <nav>
                        <ul className='nav-list'>
                            <li>
                                <Link to="/" className={`menu-btn ${isActive('/') ? 'active-page' : ''}`}>Accueil</Link>
                            </li>
                            <li>
                                <Link to="/about" className={`menu-btn ${isActive('/about') ? 'active-page' : ''}`}>A propos</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
      );
}

export default Header