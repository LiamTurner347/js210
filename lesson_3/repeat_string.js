const isCount = value => (typeof value === "number") && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    console.log(undefined);
    return;
  }

  let repeated = '';
  for (let repetition = 0; repetition < times; repetition += 1) {
    repeated += string;
  }

  console.log(repeated);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined