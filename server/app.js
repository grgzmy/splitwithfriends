/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express')
  , DocumentDBClient = require('documentdb').DocumentClient
  , docdbUtils = require('./models/docdb_utils');

var config = require('./config/environment');

// Setup db
console.log(config.docdb);
var db = new DocumentDBClient(config.docdb.host, {
    masterKey: config.docdb.auth_key
});

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app, db, config);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
