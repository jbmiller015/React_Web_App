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
            <span>
                <FontAwesomeIcon icon={props.iconImage} color="white"/>
            </span>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default ServiceIcon;