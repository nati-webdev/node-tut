console.log('Express Tutorial')
const http = require('http')

const server = http.createServer((req, res) => {
  //console.log(req)
  //console.log(req.method)
  
  const url = req.url;

  if(url === '/'){
  res.writeHead(200, {'content-type': 'text/html'})
  res.write('<h1>Home page home sweet home</h1>')
  res.end()
  }
  // home page
  else if(url === '/about'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
  }
  //about page
  else{
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(3000);
