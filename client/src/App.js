import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Issue from './component/issue';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from'./component/home';
import Plans from'./component/plans';
import Contact from'./component/contact';
import About from'./component/about';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Navbar />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/plans" component={Plans} />
          <Route path="/contact" component={Contact} />
          <Route path="/issue" component={Issue} />
         </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
