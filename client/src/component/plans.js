import React , { Component } from 'react';
import Offer from './offer';


class Plans extends Component {
  render(){
    return(
      <div id="plans">
       <header>
        <p>Netsol Broadband</p>
        <p>We Provide The Speed That You Want</p>
       </header>
       <p>Here Are The Plans</p>
       <div id="Ofbtng">
        <div href="" className="Ofbtn">1 Month</div>
        <div href="" className="Ofbtn">6 Months</div>
        <div href="" className="Ofbtn">12 Months</div>
       </div>
       <div id="Ofinfg">
        <div className="Ofinfo">None</div>
        <div className="Ofinfo">15% Off</div>
        <div className="Ofinfo">20% Off</div>
       </div>
       <Offer RS="799" LS="Unlimited Local & STD calls" IS="up to 40 Mbps" BD="105 GB"
       BoD="500 GB" DRO=" " Subs=" "/>
       <Offer RS="999" LS="Unlimited Local & STD calls" IS="up to 100 Mbps" BD="263 GB"
       BoD="1000 GB" DRO="Data Roll Over" Subs="Amazon Prime Subscription"/>
       <Offer RS="1199" LS="Unlimited Local & STD calls" IS="up to 100 Mbps" BD="525 GB"
       BoD="1000 GB" DRO="Data Roll Over" Subs="Amazon Prime Subscription"/>
       <Offer RS="1999" LS="Unlimited Local & STD calls" IS="up to 100 Mbps" BD="Unlimited GB"
       BoD="1000 GB" DRO="Data Roll Over" Subs="Amazon Prime Subscription"/>
      </div>
    );
  }
}

export default Plans;
