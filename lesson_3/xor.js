function isXor(arg1, arg2) {
  let counter = 0;

  if (!!arg1 === true) {
    counter += 1;
  }

  if (!!arg2 === true) {
    counter += 1;
  }

  return (counter === 1);
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false