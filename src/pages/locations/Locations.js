import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import dataLoc from "../../data/data.json";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import Infos from "../../components/Infos/Infos";
import Notation from "../../components/Notation/Notation";
import "../../assets/style/pages/location.scss";

function Locations() {
  const { id } = useParams();
  const data = dataLoc.find((item) => item.id === id);

  if (!data) {
    return <Navigate to="*" replace={true} />;
  }

  // Destructuring des données du logement
  const {
    pictures,
    title,
    description,
    location,
    host,
    tags,
    equipments,
    rating, // Changement ici : modifier 'notation' à 'rating'
  } = data;

  return (
    <div className="Locations">
      <Navbar />
      <div>
        <Carousel pictures={pictures} />
        <div className="info">
          <div className="infoLocation">
            <div className="infoLocationPlace">
              <h3 className="infoLocationTitle">{title}</h3>
              <h6 className="infoLocationCity">{location}</h6>
              <div className="infoLocationTags">
                {tags.map((tag, index) => (
                  <Tag key={index} text={tag} />
                ))}
              </div>
            </div>
            <div className="infoLocationOther">
              <div className="infoLocationHost">
                <Infos image={host.picture} text={host.name} />
              </div>
              <div className="infoNotationHost">
                <Notation rating={parseInt(rating)} /> {/* Passe la valeur de rating en tant que prop */}
              </div>
            </div>
          </div>
          <div className="collapse-container">
            <Collapse title={"Description"} content={description} isLocation={true} />
            <Collapse title={"Équipements"} content={equipments} isLocation={true} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Locations;