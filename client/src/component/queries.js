import React , { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Queries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      query: ' ',
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

    axios.post('/',{ query })
     .then(res => {
       console.log(res);
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
            <a href="/" className="ans-it">Answer It </a>
            <a href="/" className="view-ans">View Answer ({Query.answers.length})</a>
          </div>
        )
      })
    ) : (
        <div className="err">
          No Issue Found
        </div>
    )
    return (
      <div id="query">
        <div className="d-flex">
         <div className="justify-content-start" id="q">
          Ask Your Query
         </div>
         <div className="justify-content-center"></div>
         <div className="justify-content-end">
          <div onClick={this.toggle} id="qbtn">Add query</div>
         </div>
        </div>
        <h3>User Queries :</h3>
        <hr/>
        {queryList}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="text-white bg-primary">Add Query</ModalHeader>
          <ModalBody>
          <Form onSubmit= {this.onSubmit}>
            <FormGroup>
              <Label for="ques">Question</Label>
              <Input type="text" name="query" id="" placeholder="" onChange= {this.onChange} />
            </FormGroup>
            <Button type="submit" className="text-white">Submit</Button>
          </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Queries;
