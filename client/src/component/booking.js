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

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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

  // Storing form input values in state
  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);

    var price   = this.state.RS;
    var name    = this.state.name;
    var phone   = this.state.phone;
    var city    = this.state.city;
    var state   = this.state.state;
    var address = this.state.address;
    axios.post('/order',{
      'price':price,
      'name' : name,
      'phone' : phone,
      'city' : city,
      'state' : state,
      'address' : address
    })
     .then(res => {
       console.log(res.data);
     })
     .catch(err => {
       console.log('ERROR WHILE BOOKING');
     })
  }

  render(){
    return(
      <div id="Booking">
        <h2>Booking</h2>
          <form onSubmit={this.onSubmit}>
           <div id="personal">
            <input type="text" placeholder="your name" id="name" name="name" onChange= {this.onChange}/>
            <input type="tel" placeholder="your phone" id="phone" name="phone" onChange= {this.onChange}/>
           </div>
           <div id="location">
            <input type="text" placeholder="your city" id="city" name="city" onChange= {this.onChange}/>
            <input type="text" placeholder="your state" id="state" name="state" onChange= {this.onChange}/>
           </div>
           <textarea placeholder="your address" id="address" name="address" onChange= {this.onChange}></textarea>
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
            <button type='submit' id="book">BOOK</button>
            <button id="clear">CLEAR</button>
           </div>
          </form>
        </div>
    );
  }
}

export default Booking;
