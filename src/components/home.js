import React from "react"
import comingSoon from './comingSoon.jpg';

const Home = (props) => {
    return (
        <div>
            <img src={comingSoon} alt="comingSoon"/>
            <h1>{props.name}.me</h1>
            <p>Coming Soon</p>
        </div>
    )
}

export default Home;