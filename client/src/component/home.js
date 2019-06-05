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
import ExOffer from './exoffer';
import { Modal, ModalHeader, ModalBody, Label, Form, FormGroup } from 'reactstrap';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal1: false,
      Modal2: false
    };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    var image = document.getElementById('image').files[0];
    var name = this.state.name;
    var experience = this.state.experience;
    var title = this.state.title;
    var msg = this.state.msg;

    //To make key value pair of form input data 
    const formData = new FormData();
    formData.append('name',name);
    formData.append('image',image);
    formData.append('experience',experience);
    formData.append('title',title);
    formData.append('msg',msg);
    const config = {
       headers: {
           'content-type': 'multipart/form-data'
       }
    }

    axios.post('/upload',formData,config)
     .then((res) => {
       console.log(res.data);
     })
     .catch(err => console.log('DETAILS NOT SENT'))
  }

  toggle1() {
    this.setState({
      Modal1: !this.state.Modal1
    });
  }

  toggle2() {
    this.setState({
      Modal2: !this.state.Modal2
    });
  }

  render(){
    var sty = {
      color : '#0097E6',
      fontSize : '3vh',
      fontFamily : '"Poppins" , sans-serif',
      fontWeight : 'bold',
      marginTop : '4vh'
    };
    window.onload = () => {
      var modal = document.getElementById('modal');
      var btn = document.getElementById('get-now');
      var close = document.getElementById('close');
      btn.onclick = () => {
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
      }
      close.onclick = () => {
        modal.style.display = 'none';
      }
    }
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
        <div id="get-now">Get Now</div>
       </div>
       <center id="quote">One of the most trusted broadband network</center>
       <div id="cr">
        <h2 id="cr-h">
         Career with Netsol
        </h2>
        <div>Netsol is finding right person for the right job . Send us your details right now and
         hope to get interview call from us . we wish you a very good luck from our side</div>
        <div onClick={this.toggle1} id="send-dt">Send Details</div>
       </div>
       <div id="rw-h">
       Reviews from users
       </div>
       <div id="rw-grid">
        <div id="rw-item1">
        Netsol broadband speed is very fast . i really loved their service
        <span className="user"> - Rohan sharma</span>
        </div>
        <div className="rw-item2">
        </div>
        <div id="rw-item3">
        I feel amazing by using netsol broadband it’s one of my favourite network now
        <span className="user"> - Riya sharma</span>
        </div>
       </div>
       <Modal isOpen={this.state.Modal1} toggle={this.toggle1} className={this.props.className}>
         <ModalHeader toggle={this.toggle1} className="text-white rounded-0 bg-primary">
         Candidate Details
         </ModalHeader>
         <ModalBody>
         <Form onSubmit={this.onSubmit} encType="multipart/form-data">
           <FormGroup>
            <Label for="name" id="cname">Name</Label>
            <input name="name" className="c-input" type="text" placeholder="your name" onChange={this.onChange} />
            <Label for="image" id="cimg">Upload Your Image
            <input name="image" id="image" type="file" placeholder="your image" onChange={this.onChange} /></Label>
            <Label for="title" id="ctitle">Job title</Label>
            <input name="title" className="c-input" type="text" placeholder="your title" onChange={this.onChange} />
            <Label for="experience" id="cexp">Experience</Label>
            <input name="experience" className="c-input" type="text" placeholder="your experience" onChange={this.onChange} />
            <Label for="msg" id="cmsg">Any Message (Optional)</Label>
            <textarea name="msg" className="c-input" placeholder="your message" onChange= {this.onChange}>
            </textarea>
           </FormGroup>
           <button type="submit" id="cbtn">Submit</button>
          </Form>
         </ModalBody>
       </Modal>
       <div id="modal">
        <div id="modal-content">
         <div id="close">&times;</div>
         <div id="modal-header">Exclusive Offer</div>
         <div id="ExOfbtng">
         <div href="" className="ExOfbtn">1 Month</div>
         <div href="" className="ExOfbtn">6 Months</div>
         <div href="" className="ExOfbtn">12 Months</div>
         </div>
         <div id="ExOfinfg">
          <div className="ExOfinfo">
           <span id="xp">None</span>
          </div>
          <div className="ExOfinfo">
           <span id="xp6">6Months Plan : </span>15% Off
          </div>
          <div className="ExOfinfo">
           <span id="xp12">12Months Plan : </span>20% Off
          </div>
         </div>
         <ExOffer RS="1199" LS="Unlimited Local & STD calls" IS="up to 100 Mbps" BD="525 GB" BoD="1000 GB"
         DRO="Data Roll Over" Subs="Amazon Prime Subscription"/>
         <ExOffer RS="1999" LS="Unlimited Local & STD calls" IS="up to 100 Mbps" BD="Unlimited GB" BoD="1000 GB"
         DRO="Data Roll Over" Subs="Amazon Prime Subscription"/>
        </div>
       </div>
      </div>
    );
  }
}

export default Home;
