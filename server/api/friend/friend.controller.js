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
    res.json([]);
  },

  // Create new friend
  create: function(req, res) {
    var self = this;
    var item = req.body;

    self.FriendModel.addItem(item, function (err) {
        if (err) {
            throw (err);
        }
        //TODO:
        res.json([]);
    });
  },

  // Update friend
  update: function(req, res) {
    res.json([]);
  },

  // Destroy friend
  destroy: function(req, res) {
    res.json([]);
  }
};

module.exports = FriendController;
