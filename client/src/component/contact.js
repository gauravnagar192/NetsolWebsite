import React , { Component } from 'react';


class Contact extends Component {
  render(){
    return(
      <div id="cont">
        <div id="contact">
         <div id="contact-us">
          <div id="ct-h">CONTACT US</div>
          <div className="ct-info">856-956-8569</div>
          <div className="ct-info">Netsol@gmail.com</div>
          <div className="ct-info">0-13, Ashok Marg, Panch Batti,
          C Scheme, Ashok Nagar,Jaipur, Rajasthan 302001</div>
          <div id="ct-sl">FEEL FREE TO CONTACT NETSOL</div>
         </div>
         <div id="fdbk">
         <div id="fdbk-h">FEEDBACK</div>
         <form action=" ">
          <label htmlFor="" id="fn">Your Name</label>
          <input type="text" id="f-name"/>
          <label htmlFor="" id="fe">Your Email</label>
          <input type="text" id="f-email"/>
          <label htmlFor="" id="fm">Your Message</label>
          <textarea name="" id="f-msg"></textarea>
          <input type="submit" id="f-submit" value="SEND"/>
         </form>
         </div>
        </div>
        </div>
    );
  }
}

export default Contact;
