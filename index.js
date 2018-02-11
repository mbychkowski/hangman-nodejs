var Letter = require('./Letter.js');

var args = process.argv;
var userGuess = args[2];

console.log('Your guess is:', userGuess);

var letter = new Letter('z');

letter.updateGuess(userGuess);

console.log(letter.displayLetter());
