var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");

// gets a character sheet for editing
router.get('/create', function(req, res, next){
  crud.createGetHandler(req, res);
});

// updates a character sheet
router.put('/create', function(req, res, next){
  crud.createPutHandler(req, res);
});

router.post('/create/character', function(req, res, next){
  crud.createPostHandler(req, res);
});

module.exports = router;
