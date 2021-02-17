let str = 'In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols\
or systems.\n\
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.\n\
The most common characters are Alice and Bob.Eve, Mallory, and Trent are also common names.'
let wordInStr = str.split(' ')
let strDavid = []
for (word of wordInStr) {
  strDavid.push(word.replace('Alice', 'David'))
}
console.log(strDavid.join(" "))
