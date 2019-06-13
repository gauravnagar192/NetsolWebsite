const router = require('express').Router();
const candidate = require('../modal/candidate');
const feedback = require('../modal/feedback');
const issue = require('../modal/issue');
const offer = require('../modal/offer');
const order = require('../modal/order');

router.post('/upload',upload.single('image'),[
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

router.post('/',[
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

router.post('/order',[
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

router.post('/feedback',[
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

router.put('/answer', (req, res) => {
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

router.get('/answers/:id', (req, res) => {
  issue.findOne({ "_id" : req.params.id })
  .then(Issue => res.json(Issue))
  .catch(err => console.log("ISSUE NOT FOUND"))
})

router.get('/review', (req, res) => {
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

router.get('/issue', (req, res) => {
  issue.find({})
   .then(issue => {
     res.json(issue)
   })
})

router.get('/query/:issue', (req, res) => {
  issue.find({ _id : req.params.issue})
   .then(issue => {
     res.json(issue)
   })
   .catch(()=> {
     console.log("SERVER ERROR");
   })
})

router.get('/booking/:rupee', (req, res) => {
  offer.find({ RS : req.params.rupee })
   .then(offer => {
     res.json(offer)
   })
   .catch(()=> {
     console.log("SERVER ERROR");
   })
})
