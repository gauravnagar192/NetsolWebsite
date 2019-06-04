const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
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
