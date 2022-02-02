const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello AuctionMole!')
})

app.get('/auction', (req, res) => {
    res.send('Hello AuctionMole!')
})

app.get('/', (req, res) => {
    res.send('Hello AuctionMole!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})