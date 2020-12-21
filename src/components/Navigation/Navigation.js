import React, {Component} from "react";
import './Navigation.css';


class Navigation extends Component {
    render() {
        const sections = ['home', 'about', 'portfolio', 'contact'];
        const navLinks = sections.map(section => {
            if (section !== 'home') {
                return (
                    <li><a href={'/' + section}> {section}</a></li>
                )
            } else
                return (
                    <li><a href={'/'}> {section}</a></li>
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