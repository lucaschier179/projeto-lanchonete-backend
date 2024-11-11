import { Pool } from 'pg'

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 300, // Fecha conexões ociosas após 30 segundos
})

export default pool
