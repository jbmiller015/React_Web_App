import React, {Component} from "react";
import profile from '../../assets/ProfilePicEmpty.png';
import './Header.css';
import SocialIcon from './SocialIcon.js'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-text">
                    <h2>Hello, World! My name is</h2>
                    <h1>Jacob Miller</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <div className="iconRow">
                        <SocialIcon iconImage={faGithub} linkDest="https://www.linkedin.com/in/millerjacobb"/>
                        <SocialIcon iconImage={faLinkedin} linkDest="https://github.com/jbmiller015"/>
                    </div>
                </div>
                <div className="header-image">
                    <img src={profile}/>
                </div>
            </div>
        );
    }
}

export default Header;