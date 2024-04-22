import React from "react";
import {useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import dataLoc from "../../data/data.json";
import Carousel from "../../components/Carousel/Carousel"
import Tag from "../../components/Tag/Tag";
import Infos from "../../components/Infos/Infos";
import Notation from "../../components/Notation/Notation";
import "../../assets/style/pages/location.scss";

function Locations() {
    const { id } = useParams();
    const data = dataLoc.find((item)  => item.id === id);

    if (!data) {
        return <Navigate to="*" replace={true} />;
      }
    
    //Destructuration
    const {
        pictures,
        title,
        description,
        location,
        host,
        tags,
        equipments,
        notation,
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
                            <div className="notationHost"> 
                                <Notation rating={notation} />
                            </div>
                        </div>
                    </div>    
                    <div className="collapse-container">
                        <div className="collapse-left">
                            <Collapse title={"Description"}>
                            <p>{description}</p>
                            </Collapse>
                        </div>
                        <div className="collapse-right">
                            <Collapse title={"Equipements"} content={equipments}>
                                <ul className="collapse-list"> {equipments.map((data, index) => (
                                    <li key={index}>{data}</li>
                                ))};
                                </ul>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
      );

}

export default Locations;