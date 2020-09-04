import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";


class App extends Component {
    render() {
        return (
            <div>
                <Navigation title="Portfolio"/>
                <Header title="Jacob's Portfolio" buttonText="Find Out More"/>
                <Services/>
            </div>
        );
    }
}

export default App;
