import React from "react";
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ServiceIcon.css';


const ServiceIcon = (props) => {
    const history = useHistory();

    function handleClick() {
        history.push("/" + props.page);
    }

    return (
        <div onClick={handleClick}>
            <span className="iconSpan">
                <FontAwesomeIcon icon={props.iconImage} color="#697B5A"/>
            </span>
            <h4 className="iconH4">{props.title}</h4>
            <p className="iconP">{props.text}</p>
        </div>
    );
}

export default ServiceIcon;