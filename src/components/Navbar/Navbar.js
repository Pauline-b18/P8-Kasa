import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo_red from '../../assets/logo-red.png';
import '../../assets/style/components/navbar.scss';

function Navbar() {
    // Utilise le hook useLocation pour obtenir l'objet de localisation actuel
    const location = useLocation();
    // Extrait la route actuelle (pathname) de l'objet de localisation
    const currentRoute = location.pathname;

    return (
        <nav className='Navbar'>
            {/* Affichage du logo */}
            <img src={logo_red} alt='Logo Kasa' className="logored" />
            <div className="NavbarLink">
                {/* Lien vers la page "Accueil" */}
                {/* Applique la classe "activeLink" si la route actuelle correspond au lien et "inactiveLink" si la route actuelle ne correspond pas */}
                <Link to="/" className={currentRoute === '/' ? 'activeLink' : 'inactiveLink'}>
                    Accueil
                </Link>

                {/* Lien vers la page "A propos" */}
                <Link to="/About" className={currentRoute === '/About' ? 'activeLink' : 'inactiveLink'}>
                    À propos
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;