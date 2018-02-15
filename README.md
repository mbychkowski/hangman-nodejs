# Hangman Node App
This is an app implemented in node to execute the game Hangman. The user interfaces with the command line to guess a letter for the word. The theme for this game is Academy Award winning movies for best motion picture between the years 1991 and 2017. You have 8 attempts or you will LOSE! Good luck!

## How to Use
The user is first displayed place holders, `_`, for the word. The User then has the option to guess one letter character. An error will flash if anything other than a single letter is returned. The User also has the option to view previous letters after the guess and before replacing the place holders if correct.

## How it Works
Hangman Node App is built using Object Oriented Design scheme. Two constructors exist to accomplish this.

1. The `Letter.js` constructor accepts a character and checks if the letter is guessed correctly (default is `false`), and displays this character when turned to `true`.
```
Letter(character)

// Two properties
character -> integer of letter
isGuessed -> boolean, default is false

// Two methods
displayLetter()
updateGuess(characterGuess)
```

2. The `Word.js` constructor accepts the randomly picked gamed word utilizes the `Letter.js` constructor. Each character of the word is placed into `letterArr`. Upon user guess `updateGuess(characterGuess)` is called to see if any letters of the guessed letters are in game word; if so `isGuessed = true`. Afterwards displayLetter() is ran to show all letters guessed that are in the word.
```
Word(randomWord)

// Two properties
'randomWord' -> integer of game word
'letterArr' -> array of letters

// Two methods
displayLetter()
updateGuess(characterGuess)
```

## Built with
[Node.js](https://nodejs.org/en/docs/)

### NPM packages
[inquirer](https://www.npmjs.com/package/inquirer) - "A collection of common interactive command line user interfaces."
