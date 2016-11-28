'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/competition_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/competition_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
