import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Issue from './component/issue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Issue />
      </div>
    );
  }
}

export default App;
