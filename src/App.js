import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Screens/Home";
import About from "./components/Screens/About";
import Portfolio from "./components/Screens/Portfolio";
import Contact from "./components/Screens/Contact";
import NotFound from "./components/Screens/404";


export default function App() {
    return (
        <div id="Switch">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/404" exact component={NotFound}/>
                </div>
            </BrowserRouter>
        </div>
    );
};
