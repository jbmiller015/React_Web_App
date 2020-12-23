import React, {Component} from "react";
import "./Square.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Square extends Component {
    constructor(props) {
        super(props);
        this.modalData = this.modalData.bind(this);
    }

    /**
     * Sends data to parent element.
     * @param event
     */
    modalData(event) {
        event.preventDefault();
        const squareData = this.props.data;

        const {onClick} = this.props;
        onClick(squareData);
    }

    render() {
        const {bColor, icon} = this.props;

        return (
            <div className="square" style={{backgroundColor: bColor}} onClick={this.modalData}>
                <span>
                    <FontAwesomeIcon icon={icon}/>
                </span>
            </div>
        );
    }
}

export default Square;