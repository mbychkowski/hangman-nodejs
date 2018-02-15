var request = require('request');

function Movie(title, year, plot, actors) {
  this.title = title;
  this.year = year;
  this.plot = plot;
  this.actors = actors;
}

Movie.prototype.printInfo = function() {
  console.log('* Title:', this.title);
  console.log('* Year:', this.year);
  console.log('* Actors:', this.actors);
  console.log('* Plot:', this.plot);
}

function omdbSearch(title) {
  // accessing OMDB with request and parsing of data
  var movie;
  var requestURL = 'http://www.omdbapi.com/?' +
    't=' + title + '&' +
    'type=movie&' +
    'apikey=trilogy';

  request(requestURL, function(error, response, body) {

    // Response status code 200 is successful request
    if (!error && response.statusCode === 200) {

      var data = JSON.parse(body);

      year = data.Year;
      plot = data.Plot;
      actors = data.Actors;

      movie = new Movie(title, year, plot, actors);
      
      return movie;
    }
  });
}

module.exports = {
  omdbSearch: omdbSearch
}
