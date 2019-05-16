import React , { Component } from 'react';
import styles from '../App.css';
import antenna from '../img/antenna.png';
import img from '../img/photo.png';
import cloud from '../img/cloud.png';
import game from '../img/game.png';
import social from '../img/social.png';
import song from '../img/song.png';
import video from '../img/video.png';
import IconCard from './IconCard';


class Home extends Component {
  render(){
    var sty = {
      color : '#0097E6',
      fontSize : '3vh',
      fontFamily : '"Poppins" , sans-serif',
      fontWeight : 'bold',
      marginTop : '4vh'
    };
    return(
      <div className="Home">
      <div className="home">
      <h1 className="heading1">Subscribe to Netsol <br/>
      Broadband for Faster Speed</h1>
      <h6 className="Shead1">T&C Apply</h6>
      <div className="button">
      <a className={styles.btn} href="/"> Book now </a>
      </div>
      </div>
      <center style={sty}>check netsol availability in your city</center>
      <form action="">
       <div className="check">
       <input type="text" placeholder="Your city name" className="check-text"/>
       <input type="submit" value="Check" className="check-btn"/>
       </div>
      </form>
      <div className="heading2">Most Reliable Network</div>
       <div className="grid-container">
        <div className="item1">Welcome to our website. Netsol is the one of the most reliable broadband
        connection network in India. We respect our user’s expectations and work
        hard for fulfilling their expectations from netsol broadband. Anytime if you
        having any issue feel free to contact here or call us at 01789456123. We re-
        -solve your issues as soon as possible from us. Don’t forget to give us your
        valuable feedback here. We are waiting for it so We can make our service
        better for you.</div>
        <div className="item2">
         <img src={antenna} alt="Antenna" id="antenna"/>
        </div>
       </div>
       <div id="icon-grid">
       <IconCard source={img} title="Images" content="Search & explore many images on the internet"/>
       <IconCard source={video} title="Videos" content="Play & watch many new video on the internet"/>
       <IconCard source={song} title="Songs" content="Listen thounsands of new song everyday and enjoy"/>
       <IconCard source={game} title="Games" content="Play lots of online game and stream them live"/>
       <IconCard source={social} title="Social" content="Engage with social media & find new friends"/>
       <IconCard source={cloud} title="Cloud" content="Store important data on cloud & get data backup"/>
       </div>
       <div id="ex-of">
        <h2 id="ex-of-h">
         Exclusive Offer on plan of 1199rs and 1999rs
        </h2>
        <div>bring netsol broadband in 30% off</div>
        <div>installation cost at your home</div>
        <a href="/" id="get-now">Get Now</a>
       </div>
       <center id="quote">One of the most trusted broadband network</center>
       <div id="cr">
        <h2 id="cr-h">
         Career with Netsol
        </h2>
        <div>Netsol is finding right person for the right job . Send us your details right now and
         hope to get interview call from us . we wish you a very good luck from our side</div>
        <a href="/" id="send-dt">Send Details</a>
       </div>
      </div>
    );
  }
}

export default Home;
