import React from 'react';
import './bannerStyle.scss';


function Banner({ title, image }) {

  return (
    <div className="banner">
      {title &&<h3 className='bannerTitleContent'>{title}</h3>}
      <img src={image} alt="img" />
    </div>
  );
}

export default Banner;