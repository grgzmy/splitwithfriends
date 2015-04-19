'use strict';

var express = require('express');
var controller = require('./expense.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
