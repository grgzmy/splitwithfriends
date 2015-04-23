'use strict';

var express = require('express');
var ExpenseController = require('./expense.controller');
var Expense = require('../../models/expense');

module.exports = function(db, config){
  var router = express.Router();
  var expense = new Expense(db, config.docdb.database_id, "Expenses");
  var controller = new ExpenseController(expense);
  expense.init(function(err){
    if(err) console.log(err);
  });

  router.get('/', controller.index.bind(controller));
  router.get('/:id', controller.show.bind(controller));
  router.post('/', controller.create.bind(controller));
  router.put('/:id', controller.update.bind(controller));
  router.delete('/:id', controller.destroy.bind(controller));

  return router;
}
