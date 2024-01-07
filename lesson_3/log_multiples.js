function logMultiples(number) {
  for (let candidate = Math.floor(100 / number) * number; candidate >= number; candidate -= number) {
    if (candidate % 2 === 1) {
      console.log(candidate);
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
//85
//51
//17

logMultiples(21);
// output (3x and 1x)
//63
//21