import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo_red from '../../assets/logo-red.png';
import './navbar.scss';

function Navbar() {
    // Utilise le hook useLocation pour obtenir l'objet de localisation actuel
    const location = useLocation();
    // Extrait la route actuelle (pathname) de l'objet de localisation
    const currentRoute = location.pathname;

    return (
        <nav className='Navbar'>
            {/* Afficher le logo rouge */}
            <img src={logo_red} alt='Logo Kasa' className="logored" />
            <div className="NavbarLink">
                {/* Lien vers la page "Accueil" */}
                {/* Appliquer la classe "activeLink" si la route actuelle correspond au lien */}
                {/* Appliquer la classe "inactiveLink" si la route actuelle ne correspond pas au lien */}
                <Link to="/" className={currentRoute === '/' ? 'activeLink' : 'inactiveLink'}>
                    Accueil
                </Link>

                {/* Lien vers la page "A propos" */}
                {/* Applique la classe "activeLink" si la route actuelle correspond au lien */}
                {/* Applique la classe "inactiveLink" si la route actuelle ne correspond pas au lien */}
                <Link to="/A-propos" className={currentRoute === '/A-propos' ? 'activeLink' : 'inactiveLink'}>
                    À propos
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;