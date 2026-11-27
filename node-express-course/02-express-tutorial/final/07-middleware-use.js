const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

// app.use([logger, authorize])
//api
app.use(morgan('tiny'))

app.get('/', (req,res)=> {
  res.send('Home page')
})

app.get('/about',  (req,res)=> {
  res.send('about page')
})

app.get('/api/products', (req,res)=> {
  console.log(req.user)
  res.send('products')

})
app.get('/api/items',  (req,res)=> {
  res.send('itmes')
})
app.listen(3000, ()=> {
  console.log('server is listening on port 3000......')
})