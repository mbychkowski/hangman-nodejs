function Letter(character) {
  this.character = character;
  this.isGuessed = false;
}

Letter.prototype.displayLetter = function() {
  if (this.isGuessed) {
    return this.character;
  } else {
    return '_';
  }
}

Letter.prototype.updateGuess = function(userGuess) {
  if (userGuess === this.character) {
    this.isGuessed = true;
  } else {
    this.isGuessed = false;
  }
}

module.exports = Letter;
