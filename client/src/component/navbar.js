import React , { Component } from 'react';
import { Link , withRouter} from "react-router-dom";

class Navbar extends Component{
  render(){
    return (
      <div id="Nav">
        <div className="Toggle blue">
          <div>Netsol Broadband</div>
          <i className="fa fa-bars menu" aria-hidden="true"></i>
        </div>
        <ul id="Navbar">
          <li className="Nav-item">
            <Link to="/" className="Nav-link">Home</Link>
          </li>
          <li className="Nav-item">
            <Link to="/about" className="Nav-link">About</Link>
          </li>
          <li className="Nav-item">
            <Link to="/contact" className="Nav-link">Contact</Link>
          </li>
          <li className="Nav-item">
            <Link to="/plans" className="Nav-link">Plans</Link>
          </li>
          <li className="Nav-item">
            <Link to="/queries" className="Nav-link">Queries</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Navbar);
