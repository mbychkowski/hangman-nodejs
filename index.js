var Word = require('./Word.js');

var randomWord = 'mississippi';
var word = new Word(randomWord)

var args = process.argv;

var userGuess = args[2];
console.log('Your guess is:', userGuess);

word.guessWord(userGuess);

word.displayWord();
