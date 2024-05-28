import React from "react";
import star_grey from "../../assets/star_grey.png";
import star_red from "../../assets/star_red.png";
import "../../assets/style/components/notation.scss";

function Notation({ rating }) {
  // Créer un tableau d'étoiles basé sur la valeur de rating
  const starImg = Array.from({ length: 5 }).map((_, index) => (
    <img key={index} src={index < rating ? star_red : star_grey} alt="star" />
  ));

  return <div className="notationHost">{starImg}</div>;
}

export default Notation;
