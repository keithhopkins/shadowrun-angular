var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");

// gets a character sheet for editing
router.get('/create/all', function(req, res, next){
  crud.createGetAllHandler(req, res);
});

// updates a character sheet
router.get('/create/:alias', function(req, res, next){
  crud.createGetOneHandler(req, res);
});

router.post('/create', function(req, res, next){
  crud.createPostHandler(req, res);
});

router.delete('/create/delete/:id', function(req, res, next){
  console.log('ENTERING DELETE');
  crud.createDeleteHandler(req, res);
});

module.exports = router;
