'use strict';

// Development specific configuration
// ==================================
module.exports = {
  docdb: {
    host: process.env.DOCDB_HOST || "[the URI value from the DocumentDB Keys blade on http://portal.azure.com]",
    auth_key: process.env.DOCDB_AUTH_KEY || "[the PRIMARY KEY value from the DocumentDB Keys blade on http://portal.azure.com]",
    database_id: "SplitWithFriends"
  }
};
