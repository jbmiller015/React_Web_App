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
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/404" component={NotFound} exact/>
                    <Redirect to="/404"/>
                </Switch>
            </main>
        );
    }
}

export default App;
