import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link , withRouter} from "react-router-dom";

class Queries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      query: '',
      queries: []
    };

    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onClick(e){
    var id = e.target.getAttribute('data-id');
    console.log(id);    

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
          var answer = document.createTextNode(answers[i]);
          ans.appendChild(answer);
          console.log(a);
          a[i].appendChild(ans);
        }
        
        let a = document.getElementsByClassName(id);
        for(let i = 0 ; i < a.length ; i++){
          let a = document.getElementsByClassName(id);
          a[i].classList.add('answer')
          console.log(a);          
        }
        
      }
      a.style.display = "block";
      a.onclick = () => {
        a.style.display = "none";
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
    console.log("query : "+query);

    axios.post('/',{
       "query" : query
     })
     .then(res => {
       if(res.data.res)
         alert(res.data.res);
     })

    axios.get('/issue')
     .then(res => {
       const queries = res.data;
       console.log(this.state);
       this.setState({ queries : queries });
     })

    this.toggle()
    this.render()
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
        <div onClick={this.toggle} id="qbtn">Add Query</div>
        <div id="heading">User Queries :</div>
        <hr className="blue"/>
        {queryList}        
      </div>
    )
  }
}

export default withRouter(Queries);
