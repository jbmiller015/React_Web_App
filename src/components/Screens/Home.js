import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Services from "../Services/Services";
import React from "react";

const Home = () => {
    return (
        <div>
            <Navigation title="Home"/>
            <Header title="Jacob's Portfolio" buttonText="Find Out More"/>
            <Services/>
        </div>
    );
}

export default Home;