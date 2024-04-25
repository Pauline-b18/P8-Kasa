import React, {useState} from "react"; 
import arrow_left from '../../assets/arrow_left.png'; 
import arrow_right from '../../assets/arrow_right.png'; 
import "../../assets/style/components/carousel.scss" 

function Carousel({pictures}) { // Définit une fonction Carousel avec pour paramètre : pictures (une liste d'images)
    const [currentIndex, updateCurrentIndex] = useState(0); // Initialise l'état du currentIndex avec la valeur 0

    // Fonction pour passer à la diapositive précédente
    const previousSlide = () => {
        updateCurrentIndex((previousIndex) => (previousIndex === 0 ? pictures.length - 1 : previousIndex - 1 ));
    }

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        updateCurrentIndex((previousIndex) => (previousIndex === pictures.length - 1 ? 0 : previousIndex + 1 ));
    };

    // Affiche le numéro de la diapositive actuelle (index + 1) si le nombre d'images est supérieur à 1
    const numberSlide = pictures.length > 1 ? `${currentIndex + 1} / ${pictures.length}` : '';

    return (
        <div className="carouselContainer"> 
            {pictures.length > 1 && ( // Vérifie s'il y a plus d'une image à afficher
                <> {/* Fragments pour encapsuler plusieurs éléments*/}
                <img className="carousel_arrow carousel_arrow_left" src={arrow_left} alt="previous slide" onClick={previousSlide} /> {/* Icône de flèche gauche*/}
                <img className="carousel_arrow carousel_arrow_right" src={arrow_right} alt="next slide" onClick={nextSlide} /> {/* Icône de flèche droite */}
                </>
            )}
            <div className="carousel_images"> 
                {pictures.map((picture, index) => ( // Boucle sur chaque image pour les afficher
                    <div key={index} style={{display: index === currentIndex ? 'block' : 'none' }}> {/* Affiche l'image actuelle, masque les autres */}
                        <div className="image-container">
                            <div className="mask-carousel"></div> 
                            <img className="image_carousel" src={picture} alt={`carousel ${index + 1}`} /> {/* Image du carrousel */}
                            {numberSlide && <p className="numberSlide">{numberSlide}</p>} {/* Affiche le numéro de la diapositive */}
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    );
}

export default Carousel;
