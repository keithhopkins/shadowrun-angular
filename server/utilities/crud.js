var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var db = mongoose.model('characters');


function createDeleteHandler(req, res){
  console.log("IN THE HANDLER");
  db.removeQ({_id: req.params.id})
  .then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json({'message': err});
  }).done();
}

function createGetAllHandler(req, res){
  db.findQ().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json({'message': err});
  }).done();
}

function createGetOneHandler(req, res){
  var alias = req.params.alias;
  db.findOneQ({'character.personalData.alias': alias})
    .then(function(data){
      res.json(data);
    }).catch(function(err){
      res.json({'message': err});
    }).done();
}

function createPostHandler(req, res){
  var query={'personalData.alias': req.body.personalData.alias};
  var update = req.body;
  var options = {upsert: true, new: true};
  db.findOneAndUpdateQ(query, update, options)
    .then(function(data){
      res.json(data);
    }).catch(function(err){
      res.json({'message': err});
    }).done();
}

module.exports = {
  createPostHandler: createPostHandler,
  createGetAllHandler: createGetAllHandler,
  createGetOneHandler: createGetOneHandler,
  createDeleteHandler: createDeleteHandler
};
