const { Pool } = require("pg");

const PG_URI =
  "postgres://efobpqay:eT36qMqtdmjE8ddJGyLFLG7c9g3RgKh4@castor.db.elephantsql.com/efobpqay";

const pool = new Pool({
  connectionString: PG_URI,
  max: 3,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
