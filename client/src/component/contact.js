import React , { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMobileAlt , faEnvelope , faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : '',
      email : '',
      message : ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Storing form input values in state
  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this);


    var name    = this.state.name;
    var email   = this.state.email;
    var message    = this.state.message;

    axios.post('/feedback',{
      'name' : name,
      'email' : email,
      'message' : message
    })
     .then(res => {
       console.log(res.data);
     })
     .catch(err => {
       console.log('ERROR WHILE SENDING FEEDBACK');
     })
  }

  render(){
    return(
      <div id="cont">
        <div id="contact">
         <div id="contact-us" className="blue">
          <div id="ct-h">CONTACT US</div>
          <div className="ct-info"> Phone :
          856-956-8569</div>
          <div className="ct-info">  Email :
          Netsol@gmail.com</div>
          <div className="ct-info"> Address :
          0-13, Ashok Marg, Panch Batti,</div>
          <div className="ct-info">C Scheme, Ashok Nagar,Jaipur,</div>
          <div className="ct-info">Rajasthan 302001</div>
          <div id="ct-sl">FEEL FREE TO CONTACT NETSOL</div>
         </div>
         <div id="fdbk">
         <div id="fdbk-h">FEEDBACK</div>
         <form onSubmit={this.onSubmit}>
          <label htmlFor="" id="fn">NAME :</label>
          <input type="text" name='name' id="f-name" placeholder="your name" onChange={this.onChange} required/>
          <label htmlFor="" id="fe">EMAIL :</label>
          <input type="email" name='email' id="f-email" placeholder="your email" onChange={this.onChange} required/>
          <label htmlFor="" id="fm">MESSAGE :</label>
          <textarea name='message' id="f-msg" placeholder="your message" onChange={this.onChange} required></textarea>
          <input type="submit" id="f-submit" value="SEND"/>
         </form>
         </div>
        </div>
        </div>
    );
  }
}

export default Contact;
