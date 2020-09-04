import React, {Component} from "react";
import './Navigation.css';


class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Portfolio', 'Contact'];
        const navLinks = sections.map(section => {
            return (
                <li><a href={'#' + section}> {section}</a></li>
            )
        });
        return (
            <nav>
                <h2 className="heading">{this.props.title}</h2>
                <ul>{navLinks}</ul>
            </nav>
        )
    }
}

export default Navigation;