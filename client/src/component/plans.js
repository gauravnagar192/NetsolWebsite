import React , { Component } from 'react';
import Offer from './offer';


class Plans extends Component {
  render(){
    return(
      <div id="plans">
       <div id="nbp">Netsol Broadband Plans</div>
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
