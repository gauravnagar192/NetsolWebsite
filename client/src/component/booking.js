import React , { Component } from 'react';
import axios from 'axios';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RS : this.props.RS,
      LS : this.props.LS,
      IS : this.props.IS,
      BD : this.props.BD,
      BoD : this.props.BoD,
      DRO : this.props.DRO,
      Subs : this.props.Subs
    }
  }

  componentDidMount(){
    var rupee = this.props.match.params.id;
    axios.get("/booking/"+rupee)
     .then(res => {
       var offer = res.data[0];
       console.log(offer);
       this.setState({
         RS : offer.RS,
         LS : offer.LS,
         IS : offer.IS,
         BD : offer.BD,
         BoD : offer.BoD,
         DRO : offer.DRO,
         Subs : offer.Subs
       })
     })
     .catch(() => {
       console.log("COULDN'T SEND AJAX REQUEST");
     })

  }

  render(){
    return(
      <div id="Booking">
        <h2>Booking</h2>
          <form action="">
           <div id="personal">
            <input type="text" placeholder="your name" id="name" name="name"/>
            <input type="tel" placeholder="your phone" id="phone" name="phone"/>
           </div>
           <div id="location">
            <input type="text" placeholder="your city" id="city" name="city"/>
            <input type="text" placeholder="your state" id="state" name="state"/>
           </div>
           <textarea placeholder="your address" id="address" name="address"></textarea>
          </form>
          <div id="Offer-sel">
           <div id="Shead">Selected Plan</div>
           <div id="Sdt1">
            <div>{this.state.LS}</div>
            <div>Internet  Speed {this.state.IS}</div>
           </div>
           <div id="Sdt2">
            <div>{this.state.BD}  Broadband Data</div>
            <div>{this.state.BoD} Bonus Data</div>
           </div>
           <div id="Sdt3">
            <div>{this.state.DRO}</div>
            <div>{this.state.Subs}</div>
           </div>
           <div id="price">Rs. {this.state.RS}</div>
          </div>
          <div id="sbtn">
           <div id="book">BOOK</div>
           <div id="clear">CLEAR</div>
          </div>
        </div>
    );
  }
}

export default Booking;
