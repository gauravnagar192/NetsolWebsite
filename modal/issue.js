const mongoose = require('mongoose');
const schema = mongoose.Schema;

const issueSchema = new schema({
  query:{
    type: String,
    required: true
  },
  answers:{
    type: []
  },
  Date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('issue',issueSchema)
