import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/photo.png';
import cloud from '../img/cloud.png';
import game from '../img/game.png';
import social from '../img/social.png';
import song from '../img/song.png';
import video from '../img/video.png';
import broadband from '../img/broadband.png';
import employee from '../img/employee.png';
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

  componentDidMount(){
    axios.get('/review')
     .then(res => {
       var first = res.data.first;
       var second = res.data.second;
       var rwgrid = document.getElementById('rw-grid');
       // Creating div with rw-item1 class and showing all message and name of array first
       for(let i=0;i<first.length;i++){
         var ft = document.createElement('div');
         ft.classList.add('rw-item1');
         var ur1 = document.createElement('div');
         ur1.classList.add('user1');
         var review1 = document.createTextNode(first[i].message);
         var user1 = document.createTextNode(first[i].name);
         ur1.appendChild(user1);
         ft.appendChild(review1);
         ft.appendChild(ur1);
         rwgrid.appendChild(ft);
       }
       var md = document.createElement('div');
       md.classList.add('rw-item2');
       rwgrid.appendChild(md);
       // Creating div with rw-item3 class and showing all message and name of array second
       for(let i=0;i<second.length;i++){
         var sn = document.createElement('div');
         sn.classList.add('rw-item3');
         var ur2 = document.createElement('div');
         ur2.classList.add('user2');
         var review2 = document.createTextNode(second[i].message);
         var user2 = document.createTextNode(second[i].name);
         ur2.appendChild(user2);
         sn.appendChild(review2);
         sn.appendChild(ur2);
         rwgrid.appendChild(sn);
       }

       //Animate feedback
         // Showing only first(0) html element of rw-item1 class and making other element display none
         var a = 0;
         var b = 0;
         var fd1 = document.getElementsByClassName("rw-item1");
         var fd2 = document.getElementsByClassName("rw-item3");
         fd1[a].style.display = "block";
         fd2[b].style.display = "block";
         a++;
         b++;
         for (a; a < fd1.length; a++) {
           fd1[a].style.display = "none";
         }
         for (b; b < fd2.length; b++) {
           fd2[b].style.display = "none";
         }
         a = 0;
         b = 0;

         // Declare function using function expression is working only
         this.slider = () => {
          // Making display none of currently showing element
          // Making display block of next element
            var fd1 = document.getElementsByClassName("rw-item1");
            var fd2 = document.getElementsByClassName("rw-item3");
            fd1[a].style.display = "none";
            fd2[b].style.display = "none";
            a++;
            b++;
            if (a === fd1.length) {
              a = 0;
            }
            if (b === fd2.length) {
              b = 0;
            }
            fd1[a].style.display = "block";
            fd2[b].style.display = "block";
          }

         this.interval = setInterval(() => this.slider() , 5000);
     })
  }

  componentWillUnmount(){
    clearInterval(this.interval)
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
       // console.log(res.data.errors);
       // console.log(res.data.success);
       // if(res.data.noerr) {
       //   console.log('hi');
       //   let msg = document.getElementsByClassName('errorMsg');
       //   let errMsg = document.getElementsByClassName('errors')[0];
       //   let len = msg.length;
       //   for(let i=0;i<len;i++){
       //     if(errMsg.contains(msg[i])){
       //       errMsg.removeChild(msg[i]);
       //       i--;
       //     }
       //   }
       // }
       // if (res.data.errors) {
       //   var err = res.data.errors;
       //   let msg = document.getElementsByClassName('errorMsg');
       //   let errMsg = document.getElementsByClassName('errors')[0];
       //   if(!errMsg.contains(msg[0])){
       //     for(let i=0;i<err.length;i++){
       //       // create a new div element
       //       var newDiv = document.createElement("div");
       //       // and give it some content
       //       newDiv.classList.add('errorMsg');
       //       var newContent = document.createTextNode('* '+err[i].msg);
       //       // add the text node to the newly created div
       //       newDiv.appendChild(newContent);
       //       let errMsg = document.getElementsByClassName('errors')[0];
       //       errMsg.appendChild(newDiv);
       //     }
       //   }
       // }
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
      var cbtn = document.getElementById('check-btn');
      var ctxt = document.getElementById('check-text');
      cbtn.onclick = () => {
        var city = ['jaipur','hyderabad','jodhpur','delhi',
                   'chandigarh','mumbai','kota','agra'];
        var toggle = true;
        for(var i=0;i<city.length;i++){
          if(ctxt.value === city[i]){
             let c = document.getElementById('reply');
             let r = document.createElement('div');
             let txt = document.createTextNode('Yes Netsol avaliable');
             r.appendChild(txt);
             c.appendChild(r);
             toggle = false;
             break;
          }
        }
        if(toggle){
          let c = document.getElementById('reply');
          let r = document.createElement('div');
          let txt = document.createTextNode('Netsol is not avaliable');
          r.appendChild(txt);
          c.appendChild(r);
        }
      }
      btn.onclick = () => {
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
      }
      close.onclick = () => {
        modal.style.display = 'none';
      }
    }
    return(
      <div id="Home" className="Padding">
      <div className="home blue">
       <div id="home1">
        <div id="com">Netsol Broandband</div>
        <div id="intro">
        Fastest Internet speed is here for your browsing , chatting , live streaming ,
        gaming and many more  things . Dont wait . book it as soon as possible
        </div>
        <a id="booknow" href="/plans">Book now</a>
       </div>
       <div id="home2"></div>
       <div id="home3">
        <img src={broadband} alt="Broadband" id="broadband"/>
       </div>
       </div>
      <center style={sty}>NETSOL AVAILABILITY</center>
       <div className="check">
       <input type="text" id="check-text" placeholder="City" className="check-text"/>
       <input type="button" id="check-btn" value="Check" className="blue check-btn"/>
       </div>
      <div id="reply"></div>
      <div className="heading2">Most Reliable Network</div>
       <div className="grid-container">
        <div className="item1">Welcome to our website. Netsol is the one of the most reliable broadband
        connection network in India. We respect our user’s expectations and work
        hard for fulfilling their expectations from netsol broadband. Anytime if you
        having any issue feel free to contact here or call us at 01789456123. We resolve 
        your issues as soon as possible from us. Don’t forget to give us your
        valuable feedback here. We are waiting for it so We can make our service
        better for you.</div>
        <div className="item2">
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
       <div id="cr" className="">
         <div id="cr1">
         <h2 id="cr-h">
          Career with Netsol
         </h2>
         <div>
          Netsol is finding right person for the right job . Send us your details right now and
          hope to get interview call from us . we wish you a very good luck from our side
         </div>
         <div onClick={this.toggle1} id="send-dt">Send Details</div>
        </div>
        <div id="cr2"></div>
        <div id="cr3">
         <img src={employee} alt="Employee" id="employee"/>
        </div>    
       </div>
       <div id="rw-h">
       Reviews from users
       </div>
       <div id="rw-grid">
       </div>
       <Modal isOpen={this.state.Modal1} toggle={this.toggle1} className={this.props.className}>
         <ModalHeader toggle={this.toggle1} className="text-white rounded-0 bg-primary">
         Candidate Details
         </ModalHeader>
         <ModalBody>
         <Form onSubmit={this.onSubmit} encType="multipart/form-data">
           <FormGroup>
           <div className="errors"></div>
            <Label for="name" id="cname">Name</Label>
            <input name="name" className="c-input" type="text" placeholder="your name" onChange={this.onChange} required/>
            <Label for="image" className="blue" id="cimg">Upload Your Image
            <input name="image" id="image" type="file" placeholder="your image" onChange={this.onChange} /></Label>
            <Label for="title" id="ctitle">Job title</Label>
            <input name="title" className="c-input" type="text" placeholder="your title" onChange={this.onChange} required/>
            <Label for="experience" id="cexp">Experience</Label>
            <input name="experience" className="c-input" type="text" placeholder="your experience" onChange={this.onChange} required/>
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
