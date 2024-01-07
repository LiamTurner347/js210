function toLowerCase(string) {
  let lowerString = '';

  for (let index = 0; index < string.length; index += 1) {
    let character = string[index];
    let asciiNumeric = character.charCodeAt(0);

    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      character = String.fromCharCode(asciiNumeric += 32);
    }

    lowerString += character;
  }

  return lowerString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"