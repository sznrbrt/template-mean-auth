'use strict';

var express = require('express');
var router = express.Router();


// TODO: start work on the API here
// /api/
router.use('/users', require('./users'));

module.exports = router;
