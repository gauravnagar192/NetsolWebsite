import React , { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap';
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
  }

  componentDidMount() {
    axios.get('/issue')
      .then(res => {
        const queries = res.data;
        console.log(res.data);
        this.setState({ queries : queries });
      })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
            <div className="view-ans">View Answer ({Query.answers.length})</div>
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
        <div id="QGrid">
         <div id="q">Ask Your Query</div>
         <div onClick={this.toggle} id="qbtn">Add Query</div>
        </div>
        <div id="heading">User Queries :</div>
        <hr className="blue"/>
        {queryList}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="text-white rounded-0 bg-primary">Add Query</ModalHeader>
          <ModalBody>
          <Form onSubmit= {this.onSubmit}>
            <FormGroup>
              <Label for="ques" id="ask-label">Query</Label>
              <textarea name="query" id="ask-text" placeholder="Type your query here" onChange= {this.onChange} required>
              </textarea>
            </FormGroup>
            <div id="button-grp">
             <button type="submit" className="text-white orange" id="btn1">Ask</button>
             <button type="submit" className="text-white orange" id="btn2">Clear</button>
            </div>
          </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default withRouter(Queries);
