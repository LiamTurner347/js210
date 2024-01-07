let rlSync = require('readline-sync');
const PASSWORD = 'password';
let count = 0;

while (count < 3) {
  let userInput = rlSync.question('What is the password: ')
  if (userInput === PASSWORD) {
    console.log('You have successfully logged in');
    break;
  } else {
    count += 1;
  }
}

if (count === 3) {
  console.log('You have been denied access');
}





// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

//    What is the password: 123
//    What is the password: opensesame
//    What is the password: letmein

// message on the console
//    You have been denied access.

// If the user enters the right password, report login success.
//    What is the password: password

// message on the console
//    You have successfully logged in.