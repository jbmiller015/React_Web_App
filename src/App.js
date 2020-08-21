import React, {Component} from 'react';
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";


class App extends Component {
    render() {
        return (
            <div className='App'>
                <Navbar/>
                <Home name='jbmiller'/>
            </div>
        )
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Another Attempt'))
    }
}

export default App;
