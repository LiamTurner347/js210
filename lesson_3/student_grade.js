let score1 = Number(prompt('Enter score 1:'));
let score2 = Number(prompt('Enter score 2:'));
let score3 = Number(prompt('Enter score 3:'));
let total = score1 + score2 + score3;
let average = total / 3;

let grade = 'F';
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
}

console.log('Based on the average of your 3 scores your letter grade is "' +
            grade + '".');

// prompts to get the 3 scores
//    Enter score 1: 90
//    Enter score 2: 50
//    Enter score 3: 78

// log to the console
//    Based on the average of your 3 scores your letter grade is "B".