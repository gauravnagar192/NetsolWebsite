var mongoose= require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new Schema({
  name:{
    type : String,
    required : true
  },
  phone:{
    type : Number,
    required : true
  },
  city:{
    type : String,
    required : true
  },
  state:{
    type : String,
    required : true
  },
  address:{
    type : String,
    required : true
  },
  price:{
    type : Number,
    required : true
  }
})

// When no collection argument is passed,
// Mongoose produces a collection name by passing the model name to the utils.toCollectionName method.
// This method pluralizes the name. for example it order to orders
// If you don't like this behavior, either pass a collection name or set your schemas collection name option.
   orderSchema.set('collection','order');

module.exports = mongoose.model('order',orderSchema)
