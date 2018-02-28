import React, { Component } from 'react';
import logo from './iwoca-Logo.svg';
import './App.css';

import axios from 'axios';


class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {
    	data: null
    };
  }


  componentDidMount() {
  	axios.get('/api/')
    .then((res) => {
                this.setState({data: res.data});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <p className="App-intro">
            {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;


// https://jsfiddle.net/echo/js/?js=hello%20world!