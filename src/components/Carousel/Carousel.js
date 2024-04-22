import React, {useState} from "react";
import arrow_left from '../../assets/arrow_left.png';
import arrow_right from '../../assets/arrow_right.png';
import "../../assets/style/components/carousel.scss"

function Carousel({pictures}) {

    const [currentIndex, updateCurrentIndex] = useState(0);
   
    const previousSlide = () => {
        updateCurrentIndex((previousIndex) => (previousIndex === 0 ? pictures.length - 1 : previousIndex - 1 ));
    }

    const nextSlide = () => {
        updateCurrentIndex((previousIndex) => (previousIndex === pictures.length - 1 ? 0 : previousIndex + 1 ));
    };

    const numberSlide = pictures.length > 1 ? `${currentIndex + 1} / ${pictures.length}` : '';

    return (
        <div className="carouselContainer">
            {pictures.length > 1 && (
                <>
                <img className="carousel_arrow carousel_arrow_left" src={arrow_left} alt="previous slide" onClick={previousSlide} />
                <img className="carousel_arrow carousel_arrow_right" src={arrow_right} alt="next slide" onClick={nextSlide} />
                </>
            )}
            <div className="carousel_images">
                {pictures.map((picture, index) => (
                    <div key={index} style={{display: index === currentIndex ? 'block' : 'none' }}>
                        <div className="image-container">
                            <img className="image_carousel" src={picture} alt={`carousel ${index + 1}`} />
                            {numberSlide && <p className="numberSlide">{numberSlide}</p>}
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    );
}

export default Carousel;