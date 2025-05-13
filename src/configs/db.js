const mysql = require('mysql2')


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

db.connect(err => {
  //if (err) throw err
  if (err) {
      console.error('Database connection error:', err)
  }
  console.log('Conectado a MySQL')
  process.exit(1)
})

module.exports = db