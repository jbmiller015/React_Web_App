import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './SocialIcon.css';


const SocialIcon = (props) => {

    return (
        <a href={props.linkDest} className="socialLink">
            <FontAwesomeIcon icon={props.iconImage} color="#697B5A" size="lg" className="iconImage"/>
        </a>
    );
}

export default SocialIcon;