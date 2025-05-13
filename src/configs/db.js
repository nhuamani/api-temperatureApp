const mysql = require('mysql2')


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

db.connect(err => {
  if (err) {
      console.error('Error de conexión a la base de datos:', err)
      return;  // Salir si hay error de conexión, sin terminar el proceso
  }
  console.log('Conectado a MySQL')
})

// Exportar la conexión para que se pueda usar en otros módulos
module.exports = db