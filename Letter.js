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

Letter.prototype.updateGuess = function(characterGuess) {
  if (characterGuess === this.character) {
    this.isGuessed = true;
  } 
}

module.exports = Letter;
