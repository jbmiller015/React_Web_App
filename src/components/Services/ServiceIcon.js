import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './ServiceIcon.css';


const serviceIcon = (props) => {
    return (
        <div>
            <span>
                <FontAwesomeIcon icon={props.iconImage} color="white"/>
            </span>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default serviceIcon;