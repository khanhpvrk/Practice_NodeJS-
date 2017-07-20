module.exports = {

  calculate: function () {
    let argv = process.argv
    let i = 0
    for (i = 0; i < argv.length; i++) {
      const currentElement = argv[i]
      let findBirthday = currentElement.includes('--birthday=')
      if (findBirthday) {
        let birthday = currentElement.replace('--birthday=', '')
        let age = new Date(birthday).getFullYear()
        if (!Date.parse(age)) {
          console.log('fail')
          return false
        }
        let dateNow = new Date().getFullYear().toString()
        let result = dateNow - age
        console.log(`"age:" ${result}`)
      }
    }
  }
}
