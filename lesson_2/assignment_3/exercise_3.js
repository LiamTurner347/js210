function average(array) {
  return sum(array) / array.length;
}

function sum(array) {
  let total = 0;
  for (let index = 0; index < array.length; index += 1) {
    total += array[index];
  }
  return total;
}

let temperatures = [100, 250, 344, 283, 124]
console.log(sum(temperatures));
console.log(average(temperatures));

