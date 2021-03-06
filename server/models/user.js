var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {type: String, unique:true},
  password: String,
  characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'characters'
      }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
