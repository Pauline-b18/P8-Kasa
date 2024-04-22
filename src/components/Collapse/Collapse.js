import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../../assets/style/components/collapse.scss";
import arrow_top from '../../assets/arrow_top.png';
import AboutData from "../../data/AboutData.json";

const Collapse = ({ title }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    // Recherche l'élément dans AboutData correspondant au titre actuel
    const currentItem = AboutData.find(item => item.title === title);

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
          {isCollapsed ? null : currentItem.content}
        </div>
      </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Collapse;