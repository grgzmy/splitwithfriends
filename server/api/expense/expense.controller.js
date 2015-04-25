/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /expenses              ->  index
 * POST    /expenses              ->  create
 * GET     /expenses/:id          ->  show
 * PUT     /expenses/:id          ->  update
 * DELETE  /expenses/:id          ->  destroy
 */

'use strict';

var async = require('async');

function ExpenseController(ExpenseModel){
  this.ExpenseModel = ExpenseModel;
}

ExpenseController.prototype = {
  // Get list of expenses
  index: function(req, res) {
    var self = this;

    self.ExpenseModel.find({
        query: 'SELECT * FROM root r'
    }, function (err, items) {
        if (err) {
            throw (err);
        }
        res.json(items);
    });
  },

  // Get expense by id
  show: function(req, res) {
    var self = this;
    var id = req.param('id');

    self.ExpenseModel.getItem(id, function (err, expense) {
        if (err) {
            throw (err);
        }
        res.json(expense);
    });
  },

  // Create new expense
  create: function(req, res) {
    var i = null;
    var self = this;
    var items = req.body;

    async.map(items, self.ExpenseModel.addItem.bind(self.ExpenseModel),
        function(err, results){
      if (err) {
          throw (err);
      }
      res.json(results);
    });
  },

  // Update expense
  update: function(req, res) {
    var self = this;
    var id = req.param('id');
    var item = req.body;

    self.ExpenseModel.updateItem(id, item, function (err, expense) {
        if (err) {
            throw (err);
        }
        res.json(expense);
    });
  },

  // Destroy expense
  destroy: function(req, res) {
    var self = this;
    var id = req.param('id');

    self.ExpenseModel.deleteItem(id, function (err, result) {
        if (err) {
            throw (err);
        }
        res.json(result);
    });
  }
};

module.exports = ExpenseController;
