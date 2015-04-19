/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /friends              ->  index
 * POST    /friends              ->  create
 * GET     /friends/:id          ->  show
 * PUT     /friends/:id          ->  update
 * DELETE  /friends/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of friends
exports.index = function(req, res) {
  res.json([]);
};

// Get friend by id
exports.show = function(req, res) {
  res.json([]);
}

// Create new friend
exports.create = function(req, res) {
  res.json([]);
}

// Update friend
exports.update = function(req, res) {
  res.json([]);
}

// Destroy friend
exports.destroy = function(req, res) {
  res.json([]);
}
