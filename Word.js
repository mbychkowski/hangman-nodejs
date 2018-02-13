var Letter = require('./Letter.js');

function Word(randomWord) {
  this.randomWord = randomWord;
  this.letterArr = [];

  for (var i = 0; i < randomWord.length; i++) {
    var letter = new Letter(randomWord[i]);
    this.letterArr.push(letter);
  }
}

Word.prototype.displayWord = function() {
  var displayWord = '';
  this.letterArr.forEach(function(letterObject) {
    displayWord += letterObject.displayLetter() + ' ';
  });
  console.log('\n' + displayWord + '\n');
}

Word.prototype.guessWord = function(characterGuess) {
  this.letterArr.forEach(function(letterObject) {
    letterObject.updateGuess(characterGuess);
  });
}

module.exports = Word;
