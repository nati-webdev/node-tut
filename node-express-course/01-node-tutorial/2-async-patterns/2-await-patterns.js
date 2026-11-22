const http = require('http')


const server = http.createServer((req, res) => {
  if(req.url ==='/'){
    res.end('Done page')
    return;
  }
  if(req.url ==='/about'){

    for(let i=0; i< 100; i++ ){
      for(let j=0; j<200; j++){
        console.log(`${i} ${j}`)
      }
    }
    res.end('About done page')
    return;
  }
  res.end('Error page')

  
})

server.listen(3000, () => {
  console.log('server listening on port 3000...')
})
