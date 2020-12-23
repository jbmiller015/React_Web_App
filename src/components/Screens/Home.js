import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import React from "react";

const Home = () => {
    return (
        <div id="Home" className="Home">
            <Navigation/>
            <div className="contentRight">
                <Header title="Jacob's Portfolio" buttonText="Find Out More"/>
                <Services/>
                <Portfolio/>
                <Resume/>
                <Skills/>
                <Contact/>
            </div>
        </div>
    );
}

export default Home;