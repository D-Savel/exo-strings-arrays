let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let cleanStr = str.trim()
let wordToFind = 'Bob'
cleanStr = cleanStr[0].toUpperCase() + cleanStr.substring(1).toLowerCase() + '.'
if (cleanStr.toLowerCase().includes(wordToFind.toLowerCase())) {
  console.log(`Le mot ${wordToFind} est dans la string "${cleanStr}" si on ne respecte pas la casse.`)
}
else {
  console.log(`Le mot ${wordToFind} n'est pas dans la string "${cleanStr}".`)
}
