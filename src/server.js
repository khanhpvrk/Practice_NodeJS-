const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Calculate = require('./controller.js')

// calculate
app.post('/calculate-age', urlencodedParser, function (req, res) {
  let birthday = req.body.birthday
  const age = Calculate.calculate(birthday)
  if (age) {
    res.json({ age })
  } else {
    res.status(400).json({ message: 'Invalid birthday' })
  }
})

let argv = process.argv
let i = 0
for (i = 0; i < argv.length; i++) {
  const currentElement = argv[i]
  let findBirthday = currentElement.includes('--birthday=')
  if (findBirthday) {
    let birthday = currentElement.replace('--birthday=', '')
    let age = Calculate.calculate(birthday)
    console.log(`"age:" ${age}`)
  }
}

app.listen(3000)
