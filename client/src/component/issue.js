import React , { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      ques: ' ',
      issue: []
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/issue')
      .then(res => {
        const issue = res.data;
        this.setState({ issue });
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

    const question =  this.state.ques;

    axios.post('/',{ question })
     .then(res => {
       console.log(res);
     })

    axios.get('/issue')
     .then(res => {
       const issue = res.data;
       console.log(this.state);
       this.setState({ issue });
     })

    this.toggle()
  }

  render(){
    const { issue } = this.state;
    const issueList = issue.length ? (
      issue.map(Issue => {
        return (
          <div className="Issue" key= {Issue._id}>
            <div className="question"> Q. {Issue.question}</div>
            <a href="/" className="ans-it">Answer It ?</a>
            <a href="/" className="view-ans">View Answer</a>
          </div>
        )
      })
    ) : (
        <div className="err">
          No Issue Found
        </div>
    )
    return (
      <div className="issue">
        <div className="d-flex m-2 justify-content-start">
          <Button color="danger" onClick={this.toggle}>Add Question <i className="fa fa-plus"></i></Button>
        </div>
        {issueList}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ask ?</ModalHeader>
          <ModalBody>
          <Form onSubmit= {this.onSubmit}>
            <FormGroup>
              <Label for="ques">Question</Label>
              <Input type="text" name="ques" id="" placeholder="" onChange= {this.onChange} />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Issue;
