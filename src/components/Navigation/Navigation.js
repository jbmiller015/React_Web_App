import React, {Component} from "react";
import {slide as Menu} from 'react-burger-menu'
import {Link} from "react-router-dom";
import './Navigation.css';


class Navigation extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    //vvv Wrong approach for ReactRouter vvv:
    //Using <a> tags causes browser to issue GET request to host for new html doc
    //This causes all current browser data to get dumped.
    //Should use <Link> instead
    render() {
        return (
            <Menu>
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="services" className="menu-item" to="/services">Services</Link>
                <Link id="portfolio" className="menu-item" to="/about">Portfolio</Link>
                <Link id="Resume" className="menu-item" to="/about">Resume</Link>
                <Link id="Skills" className="menu-item" to="/about">Skills</Link>
                <Link id="contact" className="menu-item" to="/contact">Contact</Link>
            </Menu>
        )
    }
}

export default Navigation;


