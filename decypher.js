let strCesar = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let valeurDecalage = -17

let decodeStrCesar = ''
for (let index = 0; index < strCesar.length; index++) {
  if (strCesar[index] === ' ') {
    decodeStrCesar += ' '
  }
  else {
    let asciiStrCesar = strCesar.charCodeAt(index)
    let newAscii = asciiStrCesar + valeurDecalage
    while (newAscii < 65) {
      newAscii += 26
    }
    decodeStrCesar += String.fromCharCode(newAscii)
  }
}
console.log(decodeStrCesar)