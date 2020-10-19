const knex = require("knex");
const configs = require("../../knexfile");

const connection = knex(
  process.env.NODE_ENV !== "test" ? configs.development : configs.test
);

module.exports = connection;
