import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/components/card.scss';

function Card({ id, title, cover }) {
  return (
    <div className="cardContainer">
      <Link to={`/Locations/${id}`} className="galleryCard"> {/* Lien vers la page détaillée basée sur l'ID de la carte */}
          <h2>{title}</h2>
          <img src={cover} alt={title} /> {/* Image de couverture de la carte avec un texte alternatif basé sur le titre */}
          <div className="mask"></div>
      </Link>
    </div>
  );
}

export default Card;