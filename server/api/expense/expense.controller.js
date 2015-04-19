/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /expenses              ->  index
 * POST    /expenses              ->  create
 * GET     /expenses/:id          ->  show
 * PUT     /expenses/:id          ->  update
 * DELETE  /expenses/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of expenses
exports.index = function(req, res) {
  res.json([]);
};

// Get expense by id
exports.show = function(req, res) {
  res.json([]);
}

// Create new expense
exports.create = function(req, res) {
  res.json([]);
}

// Update expense
exports.update = function(req, res) {
  res.json([]);
}

// Destroy expense
exports.destroy = function(req, res) {
  res.json([]);
}
