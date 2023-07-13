require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
// const connectionString = `postgres://webchamada_user:vjGoHcz6H1fVkNftqfrPBcW3cu5EafH7@dpg-cigfuitgkuvojj90m7eg-a.oregon-postgres.render.com/webchamada`;
const connectionString = `postgres://webchamada_user:vjGoHcz6H1fVkNftqfrPBcW3cu5EafH7@dpg-cigfuitgkuvojj90m7eg-a/webchamada`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction
  ssl: true
});

module.exports = { pool };
