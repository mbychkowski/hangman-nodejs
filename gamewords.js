var omdbSearch = require('./Movie').omdbSearch;

var gameWordObjs = [];

var gameWords = [
  'moonlight',
  'spotlight',
  'birdman',
  '12 years a slave',
  'argo',
  "the king's speech",
  'the hurt locker',
  'slumdog millionair',
  'no country for old men',
  'the departed',
  'crash',
  'million dollar baby',
  'the lord of the rings: the return of the king',
  'chicago',
  'a beautiful mind',
  'gladiator',
  'american beauty',
  'shakespear in love',
  'titanic',
  'the english patient',
  'braveheart',
  'forrest gump',
  'unforgiven',
  'the silence of the lambs',
  'dances with wolves'
];

for (var i = 0; i < gameWords.length; i++) {
  var movie = omdbSearch(gameWords[i]);
  gameWordObjs.push(movie);
}

module.exports = gameWords;
