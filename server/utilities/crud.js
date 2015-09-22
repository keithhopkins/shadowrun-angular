var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var db = require("../models/database.js");


function createGetHandler(req, res){

}

function createPutHandler(req, res){

}

function createPostHandler(req, res){
  console.log(req.body);
  var query=req.body.name;
  var options = {upsert: true, new: true};
  var data = req.body;
  res.send('test');
}

module.exports = {
  createPostHandler: createPostHandler,
  createGetHandler: createGetHandler,
  createPutHandler: createPutHandler
};
