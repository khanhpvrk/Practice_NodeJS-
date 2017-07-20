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
  let birthday = req.body.birthday
  let newDate = new Date(birthday).getFullYear()
  if (!Date.parse(newDate)) {
    res.send('fail')
  }
  let dateNow = new Date().getFullYear().toString()
  let age = dateNow - newDate
  res.json({ age })
})
