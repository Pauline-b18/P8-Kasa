import React, {useState} from "react";
import arrow_top from '../../assets/arrow_top.png';
import "../../assets/style/components/collapse.scss";

const Collapse = ({ title, children }) => {
    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((prevVisible) => !prevVisible);
    };

    return (
        <div className="CollapseBar">
            <h3 className="CollapseTitle" onClick={handleToggle} style={{cursor: 'pointer'}}>
                {title} <img src={arrow_top} alt="Arrow Top" className={`collapse-arrow ${visible ? 'open' : ''}`} />
            </h3>
            <div className="collapseContent" style={{display: visible ? 'block' : 'none' }}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;