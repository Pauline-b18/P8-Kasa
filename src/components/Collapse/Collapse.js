import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../../assets/style/components/collapse.scss";
import arrow_top from '../../assets/arrow_top.png';

const Collapse = ({ title, content, isLocation }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
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
          />
        </div>
        <div
          className={`collapse-menu-content ${
            isCollapsed ? '' : 'collapse-menu-content-dropdown'
          }`}
        >
          {/* Utilise la propriété content */}
          {content}
        </div>
      </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,  //soit une chaine de caractères soit un tableau
    isLocation: PropTypes.bool // Ajoute une prop pour indiquer si le composant est utilisé dans Locations.js
};

Collapse.defaultProps = {
    isLocation: false // Par défaut, le composant n'est pas utilisé dans Locations.js, lorsque "true" il lit les données de dataLoc
};

export default Collapse;
