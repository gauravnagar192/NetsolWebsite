import React , { Component } from 'react';

class Navbar extends Component{
  render(){
    return (
      <div className="Nav">
        <div className="Toggle">
          <i className="fa fa-bars menu" aria-hidden="true"></i>
        </div>
        <ul className="Navbar">
          <li className="Nav-item">
            <a href="/" className="Nav-link">HOME</a>
          </li>
          <li className="Nav-item">
            <a href="/" className="Nav-link">ABOUT</a>
          </li>
          <li className="Nav-item">
            <a href="/" className="Nav-link">CONTACT</a>
          </li>
          <li className="Nav-item">
            <a href="/" className="Nav-link">PLANS</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
