//db.js
require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

client.connect();

module.exports = {
  query: async (text, params) => {
    try {
      const result = await client.query(text, params);
      return result.rows;
    } catch (error) {
      console.error("Error executing query:", { text, params, error });
      throw error;
    }
  },
};
