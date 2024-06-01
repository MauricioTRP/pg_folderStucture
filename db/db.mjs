import pg from "pg";
const { Pool } = pg

const config = {
  host: process.env.HOST,
  user: process.env.USERDB,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
}

const pool = new Pool(config)

const query = async (text, params) => {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('executed query', { text, duration, rows: res.rowCount })
  return res
}

export { query }
