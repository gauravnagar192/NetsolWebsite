import React , { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMobileAlt , faEnvelope , faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props)

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
         <div id="contact-us">
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
          <label htmlFor="" id="fn">Name</label>
          <input type="text" name='name' id="f-name" onChange={this.onChange}/>
          <label htmlFor="" id="fe">Email</label>
          <input type="text" name='email' id="f-email" onChange={this.onChange}/>
          <label htmlFor="" id="fm">Message</label>
          <textarea name='message' id="f-msg" onChange={this.onChange}></textarea>
          <input type="submit" id="f-submit" value="SEND"/>
         </form>
         </div>
        </div>
        </div>
    );
  }
}

export default Contact;
