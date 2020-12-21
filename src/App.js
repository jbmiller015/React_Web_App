import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/Screens/Home";
import About from "./components/Screens/About";
import Portfolio from "./components/Screens/Portfolio";
import Contact from "./components/Screens/Contact";
import NotFound from "./components/Screens/404";


class App extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/404" exact>
                        <NotFound/>
                    </Route>
                    <Redirect to="/404"/>
                </Switch>
            </main>
        );
    }
}

export default App;
