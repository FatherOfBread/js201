// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

//function shiftCharacter (character, shift)
//    var newChar = 
 //   fromCharCode(character)


function cipher (message, shift) {
    var i = 2
    var charCode = message.charCodeAt(i)
    var newChar = String.fromCharCode(charChode)
    return newChar
}

console.log(cipher('abcd', 2))


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
