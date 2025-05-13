const express = require('express')
const morgan = require('morgan')


const port = process.env.PORT || 3001
const app = express()

// Middlewares
app.use(morgan('dev'))


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
