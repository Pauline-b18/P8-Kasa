import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import BannerAbout from "../../assets/img-banner-about.png";
import Footer from "../../components/Footer/Footer";
//scss
//base de données


function About() {
    return (
        <div className="About">
            <Navbar />
            <Banner image={BannerAbout} />
            
            <Footer />    
        </div>
    )
}

export default About;