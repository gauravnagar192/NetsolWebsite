const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  RS:{
    type: Number
  },
  LS:{
    type: String
  },
  IS:{
    type: String
  },
  BD:{
    type: String
  },
  BoD:{
    type: String
  },
  DRO:{
    type: String
  },
  Subs:{
    type: String
  },
})


// When no collection argument is passed,
// Mongoose produces a collection name by passing the model name to the utils.toCollectionName method.
// This method pluralizes the name. for example it offer to offers
// If you don't like this behavior, either pass a collection name or set your schemas collection name option.
   offerSchema.set('collection','offer');

module.exports = mongoose.model('offer',offerSchema)
