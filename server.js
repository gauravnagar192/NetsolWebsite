require('./modal/issue');
require('./modal/offer');
require('./modal/order');
require('./modal/feedback');
require('./modal/candidate');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const crypto = require('crypto');
const { check, validationResult } = require('express-validator/check');
const port = process.env.PORT || 5000;
const issue = mongoose.model('issue');
const offer = mongoose.model('offer');
const order = mongoose.model('order');
const feedback = mongoose.model('feedback');
const candidate = mongoose.model('candidate');
const app = express();

//const morgan = require('morgan');
//for console log current requests
//app.use(morgan('dev'));

const storage = multer.diskStorage({

// Note: You are responsible for creating the directory when providing destination as a function.
// When passing a string, multer will make sure that the directory is created for
   destination: function (req, file, callback) {
     //Specify already self created folder path to save image
     callback(null, __dirname + '/image')
   },
   filename: function (req, file, callback) {
     callback(null, file.fieldname + Date.now())
   }
});



var upload = multer({ storage: storage })

//Map global promises
mongoose.Promise = global.Promise;

//connecting to mongodb
mongoose.connect('mongodb+srv://gaurav:mongodbgaurav@netsol-degpc.mongodb.net/wifi?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

app.use(express.static(path.join(__dirname,'/public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client' , 'build' , 'index.html'));
  });
}

app.post('/upload',upload.single('image'),[
  check('name','Name is required').not().isEmpty().not().isIn(['undefined']),
  check('title','Title is required').not().isEmpty().not().isIn(['undefined']),
  check('experience','Experience is required').not().isEmpty().not().isIn(['undefined'])
], (req, res) => {
  if (!req.file) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    console.log("No file received");
    return res.send({
      upload: false,
      success: true,
      noerr: true
    });

  } else {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    console.log('file received');
    var Candidate = new candidate();

    Candidate.name = req.body.name,
    Candidate.image.data = fs.readFileSync(req.file.path),
    Candidate.image.contentType = 'image/png',
    Candidate.title = req.body.title,
    Candidate.experience = req.body.experience,
    Candidate.msg = req.body.msg

    new candidate(Candidate)
     .save()
     .then(() => res.send({
        upload:true,
        success:true,
        noerr: true
       }) )
  }
});

app.post('/',[
  check('query','Query is required').not().isEmpty().not().isIn(['undefined'])
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  issue.find({ query : req.body.query })
   .then((query) => {
     if(query.length === 0){
        const Issue = {
          query: req.body.query
        }
        new issue(Issue)
         .save()
         .then(() => res.json({'success': 'true'}))
      }
      else
        return res.json({ res: 'Query already has been asked'})
     })
   .catch((err) => {
     console.log(err);
   })
})

app.post('/order',[
  check('price').not().isEmpty().not().isIn(['undefined']),
  check('name','Name is required').not().isEmpty().not().isIn(['undefined']),
  check('phone','Phone is required').not().isEmpty().isInt().not().isIn(['undefined']),
  check('city','City is required').not().isEmpty().not().isIn(['undefined']),
  check('state','State is required').not().isEmpty().not().isIn(['undefined']),
  check('address','Address is required').not().isEmpty().not().isIn(['undefined'])
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
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

app.post('/feedback',[
  check('name','Name is required').not().isEmpty().not().isIn(['undefined']),
  check('email','Email is required').not().isEmpty().not().isIn(['undefined']),
  check('message','Message is required').not().isEmpty().not().isIn(['undefined'])
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const Feedback = {
    name : req.body.name,
    email : req.body.email,
    message : req.body.message
  }

  new feedback(Feedback)
   .save()
   .then(() => res.json({'success': 'true'}))
})

app.put('/answer', (req, res) => {
  issue.findOne({ "_id" : req.body.id })
  .then(Issue => {
    var len = Issue.answers.length;
    Issue.answers[len] = req.body.answer;
    // Because of this data is saved in mongodb
    Issue.markModified('answers');
    Issue
    .save()
    .then(() => res.json({"success" : "true" }))
    .catch(() => res.json({"success" : "false" }))
  })
})

app.get('/answers/:id', (req, res) => {
  issue.findOne({ "_id" : req.params.id })
  .then(Issue => res.json(Issue))
  .catch(err => console.log("ISSUE NOT FOUND"))
})

app.get('/review', (req, res) => {
  var first = [] ;
  var  second = [];
  feedback.find({})
  .then(feedback =>{
    for (var i = 0,j = 0; i < feedback.length; i++) {
      if (i%2 === 0) {
        first.push(feedback[j]);
      }else {
        second.push(feedback[j]);
      }
      j++;
    }
    res.json({
      first: first,
      second: second
    })
  })
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
