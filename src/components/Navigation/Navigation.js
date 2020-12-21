import React, {Component} from "react";
import './Navigation.css';


class Navigation extends Component {
    render() {
        return (
            <nav>
                <h2 className="heading">{this.props.title}</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;