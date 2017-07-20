module.exports = {
  // test: node src/server.js --birthday = 2010
  calculate: function () {
    let b = process.argv[4]
    let date = new Date().getFullYear().toString()
    let age = date - b
    console.log(`"age:" ${age}`)
  }
}
