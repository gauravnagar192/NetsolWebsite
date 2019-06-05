const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  image:{
    data: Buffer,
    contentType: String
  },
  title:{
    type: String,
    required: true
  },
  experience:{
    type: String,
    required: true
  },
  msg:{
    type: String
  }
})


// When no collection argument is passed,
// Mongoose produces a collection name by passing the model name to the utils.toCollectionName method.
// This method pluralizes the name. for example it candidate to candidates
// If you don't like this behavior, either pass a collection name or set your schemas collection name option.
   candidateSchema.set('collection','candidate');

module.exports = mongoose.model('candidate',candidateSchema)
