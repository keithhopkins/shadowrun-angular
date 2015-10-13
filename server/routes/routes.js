var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");

// gets all character sheets for editing
router.get('/create/all', function(req, res, next){
  crud.createGetAllHandler(req, res);
});

router.get('/create/:alias', function(req, res, next){
  crud.createGetOneHandler(req, res);
});

router.post('/create', function(req, res, next){
  crud.createPostHandler(req, res);
});

router.delete('/create/delete/:id', function(req, res, next){
  crud.createDeleteHandler(req, res);
});

module.exports = router;
