const http = require('http')

const server = http.crreateServer()

//emits request event
//subsctibe to it/ listen for it / respond to it

server.on('request', (req, res) => {
  res.end('welcome')
})

server.listen(3000);