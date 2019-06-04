var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  name:{
    type : String,
    required : true
  },
  email:{
    type : String,
    required : true
  },
  message:{
    type : String,
    required : true
  }
})

// When no collection argument is passed,
// Mongoose produces a collection name by passing the model name to the utils.toCollectionName method.
// This method pluralizes the name. for example it feedback to feedbacks
// If you don't like this behavior, either pass a collection name or set your schemas collection name option.
   feedbackSchema.set('collection','feedback');

module.exports = mongoose.model('feedback', feedbackSchema)
