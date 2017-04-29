let mongoose = require('mongoose');
let Schema = mongoose.Schema;

  // create a schema
let user = new Schema({
  username: { type: String, required: true, unique: true },
  tempLow: Number,
  tempHigh: Number,
  windHigh: Number,
  precipHigh: Number,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
schemaname.pre('save', function(next) {
  // get the current date
  let currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// the schema is useless so far
// we need to create a model using it
let User = mongoose.model('User', userSchema);
// make this available to our users in our Node applications
module.exports = User;
