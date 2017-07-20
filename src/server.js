const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Calculate = require('./controller.js')

app.listen(3000, function (req, res) {
  Calculate.calculate()
})

// calculate
app.post('/calculate-age', urlencodedParser, function (req, res) {
  let b = req.body.birthday
  let date = new Date().getFullYear().toString()
  let age = date - b
  res.json(` "age:" ${age}`)
})
