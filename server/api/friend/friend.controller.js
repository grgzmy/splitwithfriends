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

function FriendController(FriendModel){
  this.FriendModel = FriendModel;
}

FriendController.prototype = {
  // Get list of friends
  index: function(req, res) {
    var self = this;

    self.FriendModel.find({
        query: 'SELECT * FROM root r'
    }, function (err, items) {
        if (err) {
            throw (err);
        }
        res.json(items);
    });
  },

  // Get friend by id
  show: function(req, res) {
    var self = this;
    var id = req.param('id');

    self.FriendModel.getItem(id, function (err, friend) {
        if (err) {
            throw (err);
        }
        res.json(friend);
    });
  },

  // Create new friend
  create: function(req, res) {
    var self = this;
    var item = req.body;

    self.FriendModel.addItem(item, function (err, friend) {
        if (err) {
            throw (err);
        }
        res.json(friend);
    });
  },

  // Update friend
  update: function(req, res) {
    var self = this;
    var id = req.param('id');
    var item = req.body;

    self.FriendModel.updateItem(id, item, function (err, friend) {
        if (err) {
            throw (err);
        }
        res.json(friend);
    });
  },

  // Destroy friend
  destroy: function(req, res) {
    var self = this;
    var id = req.param('id');

    self.FriendModel.deleteItem(id, function (err, result) {
        if (err) {
            throw (err);
        }
        res.json(result);
    });
  }
};

module.exports = FriendController;
