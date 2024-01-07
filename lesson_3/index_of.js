function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  
  for (let firstIndex = 0; firstIndex <= limit; firstIndex += 1) {
    let matchCount = 0;

    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex += 1) {
      if (firstString[firstIndex + secondIndex] === secondString[secondIndex]) {
        matchCount += 1;
      } else {
        break;
      }
    }
  
    if (matchCount === secondString.length) {
      return firstIndex;
    }
  }
  
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  
  for (let firstIndex = limit; firstIndex >= 0; firstIndex -= 1) {
    let matchCount = 0;

    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex += 1) {
      if (firstString[firstIndex + secondIndex] === secondString[secondIndex]) {
        matchCount += 1;
      } else {
        break;
      }
    }
  
    if (matchCount === secondString.length) {
      return firstIndex;
    }
  }
  
  return -1;

}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1