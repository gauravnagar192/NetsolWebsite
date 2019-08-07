import React , { Component } from 'react';
import TeamCard from './teamcard';
import akshay from '../img/akshay.jpg';
import ajay from '../img/ajay.jpg';
import meenakshi from '../img/meenakshi.jpg';
import atul from '../img/atul.jpg';
import vibha from '../img/vibha.jpg';
import shruti from '../img/shruti.jpg';

class About extends Component {

  render(){
    return(
      <div id="About">
      <div id="AbInfo">
      <div id="Info1">
       <div className="AbSub">What is Netsol</div>
       <p>Netsol is the internet service providing company . Started in year 2000 with the goal to provide fast and better internet to the people
       in efficient cost . Netsol provide the fastest speed . various test proved the fastest speed of netsol . currently it has more than 1m
       user all over the india who’s enjoying the speed of netsol network. netsol keep improving their network to maintain the quality of their
       network.Netsol is owns by the L&S Group of Company.</p>
       <div className="AbSub">What Netsol do</div>
       <p>Netsol broadband provide the fastest internet to all over the india. From Netsol broadband people can do HD videos live streaming
       without any buffering , download large file in mins and keep listening thousands of song from internet.Netsol provide upto 100mbps
       download and 40mbps upload speed</p>
      </div>
      </div>
      <center id="mt">MEET THE TEAM</center>
      <div id="team-grid">
      <TeamCard source={akshay} member="AKSHAY SHARMA" about="He started this company in 2005 with the vision to provide 
      better internet service to the user . he is the one who  take decisions for the company . he believe in quality
      rather than quantity. he is the founderof netsol." position="Founder" />
      <TeamCard source={ajay} member="AJAY SHARMA" about="He is the co-founder of the netsol company he manage the finance
      of the company . he like totake risk for bigger profit for the company . he always want to expand the business
      of netsol ." position="Cofounder" />
      <TeamCard source={meenakshi} member="MEENAKSHI MEENA" about="She is the C.E.O. of the netsol company .  she make major
      corporate decisions , manage the overall operations and resources of netsol company .  she is the main point of 
      communication  vetween the board of directors and company ." position="C.E.O." />
      <TeamCard source={atul} member="ATUL AGNIHOTRI" about="He is the C.F.O. of the netsol company . he manage thew 
      financial action of the netsol . he track cashflow in netsol. he financially plan as well as analysis netsol 
      financial strength & weakness . he propose correct actions" position="C.F.O." />
      <TeamCard source={vibha} member="VIBHA JAIN" about="She is the C.O.O. of the netsol company she manages the 
      corporation day to day affairs , she directly report to the C.E.O. of netsol . she is reponsible for the effeciency
      of netsol ." position="C.O.O." />
      <TeamCard source={shruti} member="SHRUTI MITAL" about="She is the secretary of netsol company . she is the face of 
      netsol . she perform lot of activity in netsol . she schedule meetings , appointments , maintain  files , send
      emails , answer calls and take care of guest in netsol" position="Secretary" />
      </div>
      
      </div>
    );
  }
}

export default About;
