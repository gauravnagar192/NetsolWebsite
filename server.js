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
const morgan = require('morgan');
const { check, validationResult } = require('express-validator/check');
const port = process.env.PORT || 5000;
const issue = mongoose.model('issue');
const offer = mongoose.model('offer');
const order = mongoose.model('order');
const feedback = mongoose.model('feedback');
const candidate = mongoose.model('candidate');
const app = express();

app.use(morgan('dev'));

const storage = multer.diskStorage({

// Note: You are responsible for creating the directory when providing destination as a function.
// When passing a string, multer will make sure that the directory is created for
   destination: function (req, file, callback) {
     //Specify already self created folder path to save image
     callback(null, __dirname + '/image')
   },
   filename: function (req, file, callback) {
     console.log("fieldname : "+file.fieldname);
     callback(null, file.fieldname + Date.now())
   }
});



var upload = multer({ storage: storage })

//Map global promises
mongoose.Promise = global.Promise;

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/wifi', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

app.use(express.static(path.join(__dirname,'/public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());


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
      success: false
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
     .then(() => res.send({ success:true }) )
  }
});

app.post('/',[
  check('query','Query is required').not().isEmpty().not().isIn(['undefined'])
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const Issue = {
    query: req.body.query
  }

  new issue(Issue)
   .save()
   .then(() => res.json({'success': 'true'}))
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
