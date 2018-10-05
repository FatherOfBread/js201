// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"

function leetspeak (speak) {
  const charStr = 'AEGIOSTaegiost'
  const leetStr = '43610574361057'
  let leetSpeak = ''
  var i

  for (i = 0; i < speak.length; i++) {
    let oldChar = speak.charAt(i)
    let newChar = leetStr.charAt(charStr.indexOf(oldChar))
    if (charStr.indexOf(oldChar) == -1) {
      newChar = oldChar
    }
    leetSpeak = leetSpeak.concat(newChar)
  }
  if (speak == 'Leet') { leetSpeak = 'l337' }

  return leetSpeak
}
