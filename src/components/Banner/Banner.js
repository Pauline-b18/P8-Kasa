import React from 'react';
import '../../assets/style/components/bannerStyle.scss';


function Banner({ title, image }) {

  return (
    <div className="banner">
      {title &&<h3 className='bannerTitle'>{title}</h3>} {/* Affichage du titre */}
      <img src={image} alt="img" /> {/* Affichage de l'image avec la source passée en prop */}
    </div>
  );
}

export default Banner;