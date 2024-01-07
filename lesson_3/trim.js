function trim(string) {
  let trimmed = leftTrim(string);
  trimmed = rightTrim(trimmed);

  return trimmed;
}

function leftTrim(string) {
  let copyMode = false;
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }
    
    if (copyMode) {
      newString += string[index];
    }
  }

  return newString;
}

function rightTrim(string) {
  let copyMode = false;
  let newString = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    } 

    if (copyMode) {
      newString = string[index] + newString
    }
  }

  return newString;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""