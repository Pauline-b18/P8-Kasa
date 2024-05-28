import React, { useState } from "react"; 
import PropTypes from 'prop-types'; // Importe PropTypes pour la validation des props
import "../../assets/style/components/collapse.scss"; 
import arrow_top from '../../assets/arrow_top.png'; 

const Collapse = ({ title, content, isLocation }) => { // Définit une fonction Collapse prenant trois props : title, content et isLocation
    const [isCollapsed, setIsCollapsed] = useState(true); // Initialise l'état de isCollapsed à true (collapsed par défaut)

    const toggleCollapse = () => { // Fonction pour basculer l'état de l'effondrement
      setIsCollapsed(!isCollapsed);
    };
    
    return (
      <div className='collapse-menu'> 
        <div className='collapse-menu-bar'> 
          <h2 className='collapse-menu-title'>{title}</h2> 
          <img
            src={arrow_top}
            alt="Arrow Top"
            className={`collapse-menu-chevron ${
              isCollapsed ? '' : 'collapse-menu-chevron-dropdown'
            }`}
            onClick={toggleCollapse}
          /> {/* Icône de flèche vers le haut, change de direction en fonction de l'état de l'effondrement */}
        </div>
        <div
          className={`collapse-menu-content ${
            isCollapsed ? '' : 'collapse-menu-content-dropdown'
          }`}
        > {/* Contenu du Collapse, s'affiche ou se cache en fonction de l'état de l'effondrement */}
          {/* Utilise la propriété content passée en tant que prop */}
          {content}
        </div>
      </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères obligatoire
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,  // Le contenu peut être soit une chaîne de caractères soit un tableau, obligatoire
    isLocation: PropTypes.bool // Propriété facultative pour indiquer si le composant est utilisé dans Locations.js
};

Collapse.defaultProps = {
    isLocation: false // Par défaut, le composant n'est pas utilisé dans Locations.js, lorsque "true" il lit les données de dataLoc
};

export default Collapse;
