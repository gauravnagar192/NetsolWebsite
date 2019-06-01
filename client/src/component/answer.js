import React , { Component } from 'react';
import axios from 'axios';

class Answer extends Component {

  constructor(props){
    super(props)
    this.state = {
      answers : [],
      _id : ' ',
      query : ' ',
      Date : Date
    }
  }

  componentDidMount() {
    var id = this.props.location.pathname;
    axios.get("/query"+id)
     .then(res => {
       const data = res.data[0];
       this.setState({
          answers : data.answers ,
          _id : data._id ,
          query : data.query ,
          Date : data.Date
       });
     })
     .catch(() => {
       console.log('ERROR');
     })
  }
  render(){
    return(
    <div id="answer">
    <div id="AnsHead">User Question</div>
    <div className="Container">
    <div id="ques">Q. {this.state.query}</div>
    <div id="date">Posted on {this.state.Date}</div>
    <textarea name="answer" id="ans"></textarea>
    <button id="ans-btn">Answer</button>
    </div>
    </div>
    );
  }
}

export default Answer;
