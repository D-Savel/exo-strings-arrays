strCesar = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let wordDictionary = ['A', 'I', 'AM', 'AS', 'AT', 'BY', 'DO', 'GO', 'HE', 'IF', 'IN', 'IS', 'IT', 'ME',
  'MY', 'NO', 'OF', 'ON', 'OR', 'SO', 'TO', 'WE', 'ARE', 'FOR', 'NOT', 'OFF', 'SHE', 'TOO', 'WHO',
  'WHY', 'YES', 'YOU', 'THE']
let decipheredStr = ''
let maxMatchWord = 0
let OffSetValue = 0

for (let offSet = 0; offSet < 21; offSet++) {
  let potentialDecypherStr = ''
  for (let index = 0; index < strCesar.length; index++) {
    if (strCesar[index] === ' ') {
      potentialDecypherStr += ' '
    }
    else {
      let asciiStrCesar = strCesar.charCodeAt(index)
      let newAscii = asciiStrCesar + offSet
      if (newAscii % 90 > 0 && newAscii % 90 < 65) {
        newAscii = 64 + (newAscii % 90)
      }
      potentialDecypherStr += String.fromCharCode(newAscii)
    }
  }
  let wordsInPotentialDecypherStr = potentialDecypherStr.split(' ')
  let wordsMatchDictionnary = wordsInPotentialDecypherStr.filter(word => wordDictionary.includes(word)).length
  if (wordsMatchDictionnary > maxMatchWord) {
    maxMatchWord = wordsMatchDictionnary
    decypherStr = potentialDecypherStr
    offSetValue = offSet
  }
}

console.log(`La phrase décodée est : ${decypherStr} \nAvec un décalage de ${offSetValue}`)