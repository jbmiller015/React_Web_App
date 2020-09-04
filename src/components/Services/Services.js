import React, {Component} from "react";
import './Services.css';
import ServiceIcon from './ServiceIcon';
import {faGhost, faRainbow, faRobot, faTree} from '@fortawesome/free-solid-svg-icons';

class Services extends Component {
    render() {
        return (
            <div className="services">
                <h3>Services</h3>
                <h2>What We Offer</h2>
                <div className="row">
                    <ServiceIcon iconImage={faRobot} title="Bender Rodgriguez" text="I am using these"/>
                    <ServiceIcon iconImage={faRainbow} title="Tiny Rainbow" text="icons as a way"/>
                    <ServiceIcon iconImage={faTree} title="Neatture" text="to teach myself"/>
                    <ServiceIcon iconImage={faGhost} title="Spooky!" text="component reuse"/>
                </div>
            </div>
        );
    }
}

export default Services;