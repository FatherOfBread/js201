// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function repeatChar (char, num) {
  let i
  var repeat = ''
  for (i = 0; i < num; i++) {
    repeat = repeat + char
  }
  return repeat
}

function longLongVowels (str) {
  let stretch = ''
  let i
  let newChar = ''

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      newChar = repeatChar(str.charAt(i), 4)
    } else {
      newChar = str.charAt(i)
    }
    stretch = stretch.concat(newChar)
  }

  return stretch
}

console.log(longLongVowels('cheese'))
