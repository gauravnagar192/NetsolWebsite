import React , { Component } from 'react';

class ExOffer extends Component {
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
  componentDidMount() {
    if(this.props.DRO === " "){
      this.setState({DRO : "NOT AVAILABLE"})
    }
    if(this.props.Subs === " "){
      this.setState({Subs : "NOT AVAILABLE"})
    }
  }
  render() {
    return(
      <div id="ExOffer">
       <div id="ExOff">
        <div id="exrs">Rs. {this.state.RS}</div>
        <div id="exdt" className="blue">
         <div id="edt1">
          <div>. {this.state.LS}</div>
          <div>. Internet  Speed {this.state.IS}</div>
         </div>
         <div id="edt2">
          <div>. {this.state.BD}  Broadband Data</div>
          <div>. {this.state.BoD} Bonus Data</div>
         </div>
         <div id="edt3">
          <div>. {this.state.DRO}</div>
          <div>. {this.state.Subs}</div>
         </div>
        </div>
       </div>
      </div>
    )
  }
}

export default ExOffer;
