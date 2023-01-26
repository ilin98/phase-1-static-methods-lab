class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let sanitized = string.replace(/[^A-Za-z0-9-' ]+/g, '')
    return sanitized
  }

  static titleize(string) {
    let excludedWords = ['a', 'an', 'but', 'of', 'for', 'and', 'at', 'by', 'from', 'the']
    let array = string.split(' ')
    let finalArray = array.map((word) => {
      if (word === array[0]) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      else if (excludedWords.includes(word)) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    })
    return finalArray.join(" ")
  }

}
