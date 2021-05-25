class Formatter {
  //add static methods here
  static capitalize(string) {
    const firstLetter = string[0].toUpperCase()
    const rest = string.slice(1)
    return firstLetter + rest
  }

  static sanitize(string) {
    let regex = new RegExp(/[^\da-z '-]/gi)
    let newString = string.replace(regex, '')
    return newString
  }

  static titleize(string) {
    const list = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'])
    const words = string.split(' ')
    let newString = []
    for (const word of words) {
      if (!list.has(word)) {
        newString.push(this.capitalize(word))
      } else {
        newString.push(word)
      }
    }
    return Formatter.capitalize(newString.join(' '))
  }
}
