import React, {Component} from "react";
import './Portfolio.css';
import Square from "./Square";
import {faDropbox} from "@fortawesome/free-brands-svg-icons";

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <h2>Portfolio</h2>
                <div className="results">
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                    <Square onClick={this.props.onClick} icon={faDropbox} bColor='#BFE1A4'/>
                </div>
            </div>
        );
    }
}

export default Portfolio;