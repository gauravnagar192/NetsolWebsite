require('./modal/issue');
require('./modal/offer');
require('./modal/order');
require('./modal/feedback');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 5000;
const issue = mongoose.model('issue');
const offer = mongoose.model('offer');
const order = mongoose.model('order');
const feedback = mongoose.model('feedback');
const app = express();

//Map global promises
mongoose.Promise = global.Promise;

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/wifi', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const Issue = {
    query: req.body.query
  }

  new issue(Issue)
   .save()
   .then(() => res.json({'success': 'true'}))
})

app.post('/order', (req, res) => {
  const Order = {
    price:req.body.price,
    name : req.body.name,
    phone : req.body.phone,
    city : req.body.city,
    state : req.body.state,
    address : req.body.address
  }

  new order(Order)
   .save()
   .then(() => res.json({'success': 'true'}))
})

app.post('/feedback', (req, res) => {
  const Feedback = {
    name : req.body.name,
    email : req.body.email,
    message : req.body.message
  }

  new feedback(Feedback)
   .save()
   .then(() => res.json({'success': 'true'}))
})

app.get('/issue', (req, res) => {
  issue.find({})
   .then(issue => {
     res.json(issue)
   })
})

app.get('/query/:issue', (req, res) => {
  issue.find({ _id : req.params.issue})
   .then(issue => {
     res.json(issue)
   })
   .catch(()=> {
     console.log("SERVER ERROR");
   })
})

app.get('/booking/:rupee', (req, res) => {
  offer.find({ RS : req.params.rupee })
   .then(offer => {
     res.json(offer)
   })
   .catch(()=> {
     console.log("SERVER ERROR");
   })
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})
