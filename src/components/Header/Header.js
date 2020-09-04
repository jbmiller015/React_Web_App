import React, {Component} from "react";
import Background from '../../assets/Profile_Pic.jpg';
import './Header.css';

const bImage = {
    backgroundImage: `url(${Background})`,
    height: '80vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

class Header extends Component {
    render() {
        return (
            <header style={bImage}>
                <h1>{this.props.title}</h1>
                <p>A collection of projects and exercises</p>
                <a href="#Button">{this.props.buttonText}</a>
            </header>
        );
    }
}

export default Header;