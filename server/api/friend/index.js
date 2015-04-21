'use strict';

var express = require('express');
var FriendController = require('./friend.controller');
var Friend = require('../../models/friend');

module.exports = function(db, config){
  var router = express.Router();
  var friend = new Friend(db, config.docdb.database_id, "Friends");
  var controller = new FriendController(friend);
  friend.init(function(err){
    if(err) console.log(err);
  });

  router.get('/', controller.index.bind(controller));
  router.get('/:id', controller.show.bind(controller));
  //TODO: Add an API that retrieves all the expenses for a friend.
  //router.get('/:id/expenses');
  router.post('/', controller.create.bind(controller));
  router.put('/:id', controller.update.bind(controller));
  router.delete('/:id', controller.destroy.bind(controller));

  return router;
}
