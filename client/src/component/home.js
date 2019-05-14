import React , { Component } from 'react';
import styles from '../App.css';

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
      <a className={styles.btn}> Book now </a>
      </div>
      </div>
      <center style={sty}>check netsol availability in your city</center>
      <form action="">
       <div className="check">
       <input type="text" placeholder="Your city name" className="check-text"/>
       <input type="submit" value="check" className="check-btn"/>
       </div>
      </form>
      <div className="heading2">Most Reliable Network</div>
      </div>
    );
  }
}

export default Home;
