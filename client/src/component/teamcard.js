import React , { Component } from 'react';

class TeamCard extends Component {
  
  render(){
    return(
      <div className="TeamCard">
       <div className="Cardhead">        
       </div>
       <div className="Cardcontent">
        <img src={this.props.source} alt="profile" className="Tprofile" />
        <div className="member">{this.props.member}</div>
        <div className="AboutMember">{this.props.about}</div>
       </div>
       <div className="position">
        {this.props.position}
       </div>
      </div>
    );
  }

}

export default TeamCard;
