function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  let midpoint = expectedSum / 2;

  for (let firstNum = 2; firstNum <= midpoint; firstNum += 1) {
    let secondNum = expectedSum - firstNum; 
    if (isPrime(firstNum) && isPrime(secondNum)) {
      console.log(`${firstNum} ${secondNum}`);
    }
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false; 
  }

  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    } 
  }

  return true;
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53