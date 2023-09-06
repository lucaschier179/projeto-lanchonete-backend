const pg = require('pg')
const {Pool} = require('pg')

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "projeto_delivery",
  password: "postgres",
  port: 5432
})

module.exports = pool
