const {Schema, model} = require('mongoose');

const adSchema = new Schema({
  name: {
     type: String,
     required: true
   },
   description: {
     type: String,
     required: true
   },
   imageUrl: {
     type: String,
     required: true
   },
}, {
  timestamps: true
});
/*
// Make ad model and connect to database. 'Ad' singular, and first letter capatalized.
*/
module.exports = model('Ad', adSchema)
