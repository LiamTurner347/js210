const readlineSync = require("readline-sync");

console.log("Please enter a phrase:");
let phrase = readlineSync.prompt();
let numberOfCharacters = phrase.replace(/[^a-zA-Z]/g, '').length;

console.log(`There are ${numberOfCharacters} characters in "${phrase}".`);