var inquirer = require('inquirer');

var Word = require('./Word.js');

var randomWord = 'lordoftherings';
var word = new Word(randomWord);
var letterArr = word.letterArr;

var args = process.argv;
var userGuess = args[2];

var attempts = 0;
var guessArr = [];
var isPlay = true;

var playGame = function() {

  if (isPlay) {
    // Include a promtp to allow the user see which letters they have guessed.
    inquirer.prompt([{
      type: 'input',
      name: 'userGuess',
      message: 'Guess a letter: '
    }]).then(function(answer) {

      var userGuess = answer.userGuess;
      guessArr.push(userGuess);

      word.guessWord(userGuess);

      word.displayWord();

      // Find index of the letter in the word object. Returns -1 if doesn't
      // exist in word. Add to attempts.
      var index = letterArr.map(function(obj) {
        return obj.character
      }).indexOf(userGuess);

      if (index < 0) {
        attempts++;
      }

      // 8 attempts to guess before game over.
      if (attempts > 7) {
        isPlay = false;
      }

      var remainingAttempts = 8 - attempts;
      console.log('You have ' + remainingAttempts + ' remaining.')

      playGame();
    });
  } else {
    console.log('Game Over');
  }
}

playGame();
