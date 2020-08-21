import React, {Component} from 'react';
import './App.css';
import Home from "./components/home";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Home name='jbmiller'/>
            </div>
        )
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Another Attempt'))
    }
}

export default App;
