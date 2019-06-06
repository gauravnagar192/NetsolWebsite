import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      query: ' ',
      queries: []
    };

   this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    var black = {
      color : '#000000'
    };
    return(
      <div id="About">
      <div id="AbHead">About Us</div>
      <div id="AbInfo">
      <div id="Info1" className="blue">
       <div className="AbSub">What is Netsol</div>
       <p>Netsol is the internet service providing company . Started in year
       2000 with the goal to provide fast and better internet to the people
       in efficient cost . Netsol provide the fastest speed . various test
       proved the fastest speed of netsol . currently it has more than 1m
       user all over the india who’s enjoying the speed of netsol network.
       netsol keep improving their network to maintain the quality of their
       network.Netsol is owns by the L&S Group of Company.</p>
       <div className="AbSub">What Netsol do</div>
       <p>Netsol broadband provide the fastest internet to all over the india
       . From Netsol broadband people can do HD videos live streaming
       without any buffering , download large file in mins and keep listening
       thousands of song from internet.Netsol provide upto 100mbps
       download and 40mbps upload speed</p>
      </div>
      <div id="Info2">
      Netsol is available in 200+cities of India
      </div>
      <div id="Info3">
       <div id="card">
        <div id="l">
         <div className="SubHead2">Main Office :</div>
         <p>Gala No 6 & 7, Laxmi Plaza,</p>
         <p>Laxmi Industrial Estate,</p>
         <p>Link Road, Andheri West,</p>
         <p>Mumbai - 400053 (Map)</p>
        </div>
        <div onClick={this.toggle} id="R">
         <div className="SubHead2">Branch Offices </div>
          <p>20+ cities</p>
          <p>of</p>
          <p>india</p>
        </div>
       </div>
      </div>
      <div id="Info4">
      <p>Enjoy Live Streaming of HD Videos</p>
      <p>Fastest Downloading Speed</p>
      <p>Unlimited Music & Games</p>
      </div>
      <div id="Info5">
      <div style={black}><FontAwesomeIcon icon={faTrophy} /></div>
      <p style={black}>Our Achievement</p>
      <p>1million Plus Users All over India</p>
      </div>
      <div id="Info6">
      <h5>For Business enquiry</h5>
      <p>email us at netsol@gmail.com</p>
      <p>contact on 9315621432</p>
      </div>
      </div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle} className="text-white rounded-0 bg-danger">
        Cities
        </ModalHeader>
        <ModalBody>
        <p className="city">Delhi</p>
        <p className="city">Chandigarh</p>
        <p className="city">Jodhpur</p>
        <p className="city">Mumbai</p>
        <p className="city">Jaipur</p>
        <p className="city">Kota</p>
        <p className="city">Agra</p>
        <p className="city">Hyderabad</p>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

export default About;
