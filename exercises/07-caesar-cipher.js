// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function cipher (message, shift) {
  const deciphAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const ciphAlphabet = deciphAlphabet.substring(shift) + deciphAlphabet.substring(0, shift)
  let newMessage = ''
  let oldMessage = message.toLowerCase()
  var i

  for (i = 0; i < message.length; i++) {
    let oldChar = oldMessage.charAt(i)
    let newChar = ciphAlphabet.charAt(deciphAlphabet.indexOf(oldChar))
    if (deciphAlphabet.indexOf(oldChar) == -1) {
      newChar = oldChar
    }
    newMessage = newMessage.concat(newChar)
  }

  return newMessage
}

// console.log(cipher('We hold these truths to be self-evident', 8))
// console.log('em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb')
// console.log(cipher('Genius without education is like silver in the mine', 5))
// console.log('ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj')

// str.charAt() is the function for returning the character at an index
// charCodeAt()	Returns the Unicode of the character at the specified index
// fromCharCode()	Converts Unicode values to characters
// replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher (message, shift) {
  const ciphAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const deciphAlphabet = ciphAlphabet.substring(shift) + ciphAlphabet.substring(0, shift)
  let newMessage = ''
  let oldMessage = message.toLowerCase()
  var i

  for (i = 0; i < message.length; i++) {
    let oldChar = oldMessage.charAt(i)
    let newChar = ciphAlphabet.charAt(deciphAlphabet.indexOf(oldChar))
    if (deciphAlphabet.indexOf(oldChar) == -1) {
      newChar = oldChar
    }
    newMessage = newMessage.concat(newChar)
  }

  return newMessage
}

// console.log(decipher('cvvcem cv fcyp!', 2))
// console.log('attack at dawn!')
// console.log(decipher('ehz czlod otgpcrpo ty l hzzo', 11))
// console.log('two roads diverged in a wood')
