function rot13(string) {
  let rotatedString = '';
  const HIGHEST_UPPERCASE = 90;
  const HIGHEST_LOWERCASE = 122;

  for (let index = 0; index < string.length; index += 1) {
    let character = string[index];

    if (character.match(/[A-Z]/)) {
      character = rotCharacter(character, HIGHEST_UPPERCASE);
    } 
    
    if (character.match(/[a-z]/)) {
      character = rotCharacter(character, HIGHEST_LOWERCASE);
    }

    rotatedString += character;
  }

  return rotatedString;
}

function rotCharacter(char, topDec) {
  let asciiNumeric = char.charCodeAt(0) + 13;

  if (asciiNumeric > topDec) {
    asciiNumeric -= 26;
  }

  return String.fromCharCode(asciiNumeric);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
// Teachers open the door, but you must enter by yourself.