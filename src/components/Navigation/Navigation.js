import React, {Component} from "react";
import {slide as Menu} from 'react-burger-menu'
import './Navigation.css';


class Navigation extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="services" className="menu-item" href="/#services">Services</a>
                <a id="portfolio" className="menu-item" href="/#about">Portfolio</a>
                <a id="Resume" className="menu-item" href="/#about">Resume</a>
                <a id="Skills" className="menu-item" href="/#about">Skills</a>
                <a id="contact" className="menu-item" href="/#contact">Contact</a>
            </Menu>
        )
    }
}

export default Navigation;


