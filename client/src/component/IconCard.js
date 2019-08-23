import React , { Component } from 'react';

class IconCard extends Component {
  
  render(){
    return(
      <div className="IconCard">
       <img src={this.props.source} alt="" className="Icon"/>
       <div className="title">{this.props.title}</div>
       <p className="content">{this.props.content}</p>
      </div>
    );
  }

}

export default IconCard;
