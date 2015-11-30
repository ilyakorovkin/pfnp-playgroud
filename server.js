var express = require('express')
var app = express()

var message = 'how are you today?'

app.get('/', function (req, res) {
  res.send(message)
})

app.get('/edit/:motd', function (req, res) {
  message = req.params.motd
  res.send('message updated')
})

app.listen(process.env.PORT 3000)
