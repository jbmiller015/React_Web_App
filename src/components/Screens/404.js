import Navigation from "../Navigation/Navigation";
import Background from '../../assets/Profile_Pic.jpg';
import React from "react";


const NotFound = () => {
    return (
        <div>
            <Navigation title="404"/>
            <div style={{
                "textAlign": "center",
                "margin": "0",
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "margin-right": "-50%",
                "transform": "translate(-50%, -50%)"
            }}>
                <h2>404 Not Found</h2>
                <img src={Background}/>
                <h6>Sorry, Couldn't find it!</h6>
            </div>
        </div>
    );
}

export default NotFound;