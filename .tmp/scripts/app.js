require.register("main", function(exports, require, module){
  'use strict';

var GameResultsCollection = require('models/GameResultsCollection');

$(document).ready(function () {
  $('#container').append(JST.application());

  var gameResult = new GameResultsCollection();

  $('.button').on('click', function () {
    gameResult.fetch();
  });

  gameResult.on('request', function () {
    $('.button').text('loading...');
  });

  gameResult.on('sync', function () {
    setTimeout(function () {

      $('.button').text('Submit');
    }, 1000);
  });

  gameResult.on('add', renderGame);

  function renderGame(gameResults) {
    setTimeout(function () {
      $('.collection-info').prepend(JST.game(gameResults.toJSON()));
    }, 1000);
  }
});
  
});

require.register("models/GameResult", function(exports, require, module){
  "use strict";

var GameResult = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    game: "N/A",
    opponent: "N/A",
    score: "N/A"
  }
});

module.exports = GameResult;
  
});

require.register("models/GameResultsCollection", function(exports, require, module){
  'use strict';

var GameResult = require('models/GameResult');

var GameResultsCollection = Backbone.Collection.extend({
  model: GameResult,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronsstuff'
});

module.exports = GameResultsCollection;
  
});
