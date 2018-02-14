var inquirer = require('inquirer');
var Word = require('./Word.js');
var gameWords = require('./gamewords.js');
var alphabet = require('./alphabet.js');

var args = process.argv;
var userGuess = args[2];

var randIndex = randomGenerator(0, gameWords.length - 1);
var randomWord = gameWords[randIndex];

var word = new Word(randomWord);
var letterArr = word.letterArr;

console.log('\nGuess the following academy award winning movie title:')
word.displayWord();

// Initialize variables for playGame() function.
var attempts = 0;
var guessArr = [];
var isPlay = true;

var playGame = function() {

  if (isPlay) {

    inquirer.prompt([{
        type: 'input',
        name: 'userGuess',
        message: 'Guess a letter: ',
        validate: function(answer) {
          if (answer > 1) {
            return 'You can only choose one letter!';
          }
          if (alphabet.indexOf(answer) < 0) {
            return 'Answer must be a single letter!';
          }
          return true;
        }
      },
      {
        type: 'confirm',
        name: 'seeGuess',
        default: false,
        message: 'Would you like to view previous guesses? '
      }
    ]).then(function(answer) {

      var userGuess = answer.userGuess.toLowerCase().trim();
      guessArr.push(userGuess);

      var seeGuess = answer.seeGuess;
      if (seeGuess) {
        showGuess(guessArr)
      }

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

      if (isWinner()) {
        winner();
        isPlay = false;
        return
      }

      // 8 attempts to guess before game over.
      if (attempts > 7) {
        isPlay = false;
      }

      attemptsLeft();

      playGame();
    });
  } else {
    gameOver()
  }
}

playGame();

function gameOver() {
  console.log('\n-----------------');
  console.log('-----GameOver-----');
  console.log('-----------------\n');
}

function attemptsLeft() {
  var remainingAttempts = 8 - attempts;
  console.log('You have ' + remainingAttempts + ' remaining.');
}

function winner() {
  console.log('\n!!!!!!!!!!!!!!!!!!');
  console.log('!!!!!!WINNER!!!!!!');
  console.log('!!!!!!!!!!!!!!!!!\n');
}

function isWinner() {
  var trueCount = 0;

  for (var i = 0; i < letterArr.length; i++) {

    if (letterArr[i].isGuessed) {
      trueCount++;
    }
  }
  if (trueCount === letterArr.length) {
    return true;
  } else {
    return false;
  }
}

function showGuess(guessArr) {
  var display = '';
  for (var i = 0; i < guessArr.length; i++) {
    display += guessArr[i] + ' | ';
  }
  console.log('\n==================');
  console.log('===Letters Used===')
  console.log(display);
  console.log('==================\n');
}

function randomGenerator(minValue, maxValue) {
  var range = maxValue - minValue;
  randomNumber = Math.floor(Math.random() * (range + 1)) + minValue;

  return randomNumber;
}
