function logOddNumbers(lastNumber) {
  for (let i = 0; i <= lastNumber; i += 1) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logOddNumbers(19);

// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19