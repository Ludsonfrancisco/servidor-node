const express = require('express')
const app = express()
const PORT = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.set('view engine', 'ejs')


app.listen(PORT, () => {
  console.log('running on port: ' + PORT)
})