import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import BannerAbout from "../../assets/img-banner-about.png";
import Footer from "../../components/Footer/Footer";
import AboutData from '../../data/AboutData.json'; 
import Collapse from '../../components/Collapse/Collapse'
import '../../assets/style/pages/about.scss';

function About() {
    return (
        <div className="About">
            <Navbar />
            <Banner image={BannerAbout} />
            <div className='AboutMain'>
                {/* Boucle sur les données pour afficher chaque élément dans un Collapse */}
                {AboutData.map((item) => ( 
                    <Collapse title={item.title} key={item.id} content={item.content} isLocation={false} >
                        <p>{item.content}</p> {/* Contenu affiché à l'intérieur de chaque Collapse */}
                    </Collapse>
                ))}
            </div>
            <Footer />    
        </div>
    )
}

export default About;