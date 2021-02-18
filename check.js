let str = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'
let wordToFind = 'Javascript'
if (str.toLowerCase().includes(wordToFind.toLowerCase())) {
  console.log(`Le mot ${wordToFind} est dans la string "${str}"`)
}
else {
  console.log(`Le mot ${wordToFind} n'est pas dans la string "${str}".`)
}
