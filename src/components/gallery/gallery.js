import React from 'react';
import Card from '../Card/Card.js'; 
import data from '../../data/data.json';
import '../../assets/style/components/gallery.scss';

function Gallery() {
  const handleClick  = (id) => {  {/*Choisis la carte et indique le bon ID pour la page de logement.*/}
  };

  return (
    <div className='galleryContainer'>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
          handleClick ={handleClick }
        />
      ))}
    </div>
  );
}

export default Gallery;