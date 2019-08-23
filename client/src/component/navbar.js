import React , { Component } from 'react';
import { Link , withRouter} from "react-router-dom";

class Navbar extends Component{
  render(){
    return (
      <div id="Nav">
        <div className="Toggle">
          <i className="fa fa-bars menu" aria-hidden="true"></i>
          <div>Netsol</div>
        </div>
        <ul id="Navbar">
          <li className="Nav-item">
            <Link to="/" className="Nav-link">HOME</Link>
          </li>
          <li className="Nav-item">
            <Link to="/about" className="Nav-link">ABOUT</Link>
          </li>
          <li className="Nav-item">
            <Link to="/contact" className="Nav-link">CONTACT</Link>
          </li>
          <li className="Nav-item">
            <Link to="/plans" className="Nav-link">PLANS</Link>
          </li>
          <li className="Nav-item">
            <Link to="/queries" className="Nav-link">QUERY</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Navbar);
