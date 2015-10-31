var genres = [{
  'image': 'assets/genres/party.jpg',
  'name': 'Party'
}, {
  'image': 'assets/genres/chill.jpg',
  'name': 'Chill'
}, {
  'image': 'assets/genres/comedy.jpg',
  'name': 'Comedy'
}, {
  'image': 'assets/genres/romance.jpg',
  'name': 'Romance'
}, {
  'image': 'assets/genres/pop.jpg',
  'name': 'Pop'
}, {
  'image': 'assets/genres/latin.jpg',
  'name': 'Latin'
}, {
  'image': 'assets/genres/workout.jpg',
  'name': 'Workout'
}, {
  'image': 'assets/genres/edm.jpg',
  'name': 'Edm'
}, {
  'image': 'assets/genres/indie.jpg',
  'name': 'Indie'
}, {
  'image': 'assets/genres/decades.jpg',
  'name': 'Decades'
}, {
  'image': 'assets/genres/genre.jpg',
  'name': 'Genre'
}];
genres.forEach((element, index) => {
  element.id = index + 1;
});

module.exports = function(app) {
  var express = require('express');
  var genresRouter = express.Router();

  genresRouter.get('/', function(req, res) {
    res.send({
      'genres': genres
    });
  });

  genresRouter.get('/:id', function(req, res) {
    var genre = genres.find(element => {
      return +req.params.id === element.id;
    });

    if (genre) {
      res.send({
        'genres': genre
      });
    } else {
      res.status(404).end();
    };
  });

  app.use('/api/genres', genresRouter);
};
