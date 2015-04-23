'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  docdb: {
    host: process.env.DOCDB_HOST,
    auth_key: process.env.DOCDB_AUTH_KEY,
    database_id: "SplitWithFriends"
  }
};
