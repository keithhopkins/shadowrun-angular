var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var characterSchema = new Schema({
  race: String,
  attributes: {
    body: Number,
    strength: Number,
    agility: Number,
    reaction: Number,
    intuition: Number,
    charisma: Number,
    wisdom: Number,
    logic: Number,
    will: Number,
    magic: Number,
    resonance: Number,
    edge: Number
  },
  activeSkills: [{
    skill: String,
    rank: Number
  }],
  qualities: [{
    quality: String
  }],
  items: [{
    item: String
  }],
  knowledge: [{
    knowledge: String,
    rank: Number
  }]
});

module.exports = mongoose.model('characters', characterSchema);
