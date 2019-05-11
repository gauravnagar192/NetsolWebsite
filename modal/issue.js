const mongoose = require('mongoose');
const schema = mongoose.Schema;

const issueSchema = new schema({
  question:{
    type: String,
    required: true
  },
  answer:{
    type: []
  },
  Date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('issue',issueSchema)
