var GameResult = require('models/GameResult');

var GameResultsCollection = Backbone.Collection.extend({
  model: GameResult,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronsstuff'
});

module.exports = GameResultsCollection;
