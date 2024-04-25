import React from 'react'; 
import Card from '../Card/Card.js'; 
import data from '../../data/data.json'; 
import '../../assets/style/components/gallery.scss'; 

function Gallery() { // Fonction Gallery
  const handleClick  = (id) => {  // Choisis la carte et indique le bon ID pour la page de logement.
  };

  return (
    <div className='galleryContainer'> 
      {data.map((item) => ( // Boucle sur les données pour afficher chaque carte à partir des données du fichier JSON
        <Card
          key={item.id}
          id={item.id} 
          title={item.title} 
          cover={item.cover} 
          handleClick ={handleClick } // Propriété handleClick passée au composant Card
        />
      ))}
    </div>
  );
}

export default Gallery; 
