const pg = require('pg')

const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "projeto_delivery",
  password: "postgres",
  port: 5432
})

module.exports = client
//console.log(client)
