import React from 'react'; 
import Card from '../Card/Card.js'; 
import data from '../../data/data.json'; 
import '../../assets/style/components/gallery.scss'; 

function Gallery() { // Fonction Gallery

  return (
    <div className='galleryContainer'> 
      {data.map((item) => ( // Boucle sur les données pour afficher chaque carte à partir des données du fichier JSON
        <Card
          key={item.id}
          id={item.id} 
          title={item.title} 
          cover={item.cover} 
        />
      ))}
    </div>
  );
}

export default Gallery; 
