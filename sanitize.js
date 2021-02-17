let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let cleanStr = str.trim()
cleanStr = cleanStr[0].toUpperCase() + cleanStr.substring(1).toLowerCase() + '.'
console.log(cleanStr)