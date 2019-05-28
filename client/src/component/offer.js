import React , { Component } from 'react';

class Offer extends Component {
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
      <div id="Offer">
       <div id="Off">
        <div id="rs">Rs. {this.state.RS}</div>
        <div id="dt">
         <div id="dt1">
          <div>. {this.state.LS}</div>
          <div>. Internet  Speed {this.state.IS}</div>
         </div>
         <div id="dt2">
          <div>. {this.state.BD}  Broadband Data</div>
          <div>. {this.state.BoD} Bonus Data</div>
         </div>
         <div id="dt3">
          <div>. {this.state.DRO}</div>
          <div>. {this.state.Subs}</div>
         </div>
         <div id="sl">
          <div>SELECT</div>
         </div>
        </div>
       </div>
      </div>
    )
  }
}

export default Offer;
