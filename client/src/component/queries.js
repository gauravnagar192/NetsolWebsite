import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, Form, FormGroup } from 'reactstrap';
import { Link , withRouter} from "react-router-dom";

class Queries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      query: '',
      queries: []
    };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    axios.get('/issue')
      .then(res => {
        const queries = res.data;
        this.setState({ queries : queries });
      })
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  onClick(e){
    var id = e.target.getAttribute('data-id');

    axios.get('/answers/'+id)
    .then(res => {
      var answers = res.data.answers; 
      //let a = document.getElementById('answers');
      let ans = document.getElementsByClassName('answers')[0];
      let a = document.getElementsByClassName(id)[0];      
      if(!a.contains(ans)){
        for (let i = 0; i < answers.length; i++) {
          let a = document.getElementsByClassName(id);
          let ans = document.createElement('div');
          ans.classList.add('answers')
          let ua = document.createElement('div');
          var answer = document.createTextNode(answers[i]);
          ua.classList.add('usans')
          let user = document.createElement('div');
          ua.appendChild(answer)
          user.classList.add('user')
          user.classList.add('fa')
          user.classList.add('fa-user-circle-o')
          ans.appendChild(user);
          ans.appendChild(ua);
          a[0].appendChild(ans);
        }
        
        let a = document.getElementsByClassName(id);
        for(let i = 0 ; i < a.length ; i++){
          let a = document.getElementsByClassName(id);
          a[i].classList.add('answer')
        }
        
      }

      if(this.state.modal1) {    
        a.style.display = "none";  
        this.toggle1()
      } else {
        a.style.display = "block";
        this.toggle1()
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const query =  this.state.query;

    axios.post('/',{
       "query" : query
     })
     .then(res => {
       console.log(res.data.res);
       
       if(res.data.res)
         alert(res.data.res);

         axios.get('/issue')
         .then(res => {
           const queries = res.data;
           this.setState({ queries : queries });
         })  
     })
    
    this.render()
    this.toggle2()
    console.log("render");
  }

  render(){
    const { queries } = this.state;
    const queryList = queries.length ? (
      queries.map(Query => {
        return (
            <div className="Issue" key= {Query._id}>
             <div className="question"> Q. {Query.query}</div>
             <Link to={'/'+Query._id}><div className="ans-it">Answer It </div></Link>
             <div data-id= {Query._id} onClick={this.onClick} className="view-ans">View Answer ({Query.answers.length})</div>
             <div className={Query._id}></div>
            </div>
        )
      })
    ) : (
        <div className="err">
          No Query Found
        </div>
    )
    return (
      <div id="query">
        <div onClick={this.toggle2} id="qbtn">Add Query</div>
        <div id="heading">User Queries :</div>
        <hr className="blue"/>
        {queryList}        
        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
          <ModalHeader toggle={this.toggle2} className="text-white rounded-0 bg-blue">Add Query</ModalHeader>
          <ModalBody>
          <Form onSubmit= {this.onSubmit}>
            <FormGroup>
              <textarea name="query" id="ask-text" placeholder="Type your query here" onChange= {this.onChange} required>
              </textarea>
            </FormGroup>
            <div id="button-grp">
             <button type="submit" className="text-white " id="btn1">Ask</button>
             <button type="reset" className="text-white " id="btn2">Clear</button>
            </div>
          </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default withRouter(Queries);
