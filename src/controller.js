module.exports = {
  calculate: birthday => {
    // Check birthday is valid
    if (!Date.parse(birthday)) {
      return false
    }
    let newDate = new Date(birthday).getFullYear()
    let dateNow = new Date().getFullYear().toString()
    let age = dateNow - newDate
    return age
  }
}
