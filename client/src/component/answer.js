import React , { Component } from 'react';
import axios from 'axios';

class Answer extends Component {

  constructor(props){
    super(props)
    this.state = {
      answer : '',
      _id : '',
      query : '',
      Date : ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // Storing form input values in state
  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    var ans = this.state.answer;
    var id = this.state._id;

    axios.put("/answer",{
      'id': id,
      'answer': ans
    })
    .then(res => {
      let path = '/queries';
      console.log(this.props);
      //Redirecting     
      this.props.history.push(path);      
    })
    .catch(err => {
      console.log("ANSWER NOT SENT");
    })
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
    <div id="date">Posted on {this.state.Date.slice(0,10)}</div>
    <form onSubmit={this.onSubmit}>
    <textarea name="answer" placeholder="write your answer" id="ans" onChange={this.onChange}></textarea>
    <button type="submit" id="ans-btn">Answer</button>
    </form>
    </div>
    </div>
    );
  }
}

export default Answer;
