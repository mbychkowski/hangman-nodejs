var alphabet = require('./alphabet.js');

function Letter(character) {
  this.character = character;
  this.isGuessed = false;
}

Letter.prototype.displayLetter = function() {
  // if character is not in alphabet array, display it (spaces, commas, etc...)
  if (alphabet.indexOf(this.character) < 0) {
    this.isGuessed = true;
  }

  if (this.isGuessed) {
    return this.character;
  } else {
    return '_';
  }
}

Letter.prototype.updateGuess = function(characterGuess) {
  if (characterGuess === this.character) {
    this.isGuessed = true;
  }
}

module.exports = Letter;
