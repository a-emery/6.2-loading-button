var GameResultsCollection = require('models/GameResultsCollection');

$(document).ready(function(){
  $('#container').append(JST.application());

  var gameResult = new GameResultsCollection();


  $('.button').on('click', function(){
    gameResult.fetch();
  });

    gameResult.on('request', function(){
      $('.button').text('loading...');
  });

    gameResult.on('sync', function(){
      setTimeout(function(){

      $('.button').text('Submit');
    }, 1000);
  });

    gameResult.on('add', renderGame);

  function renderGame(gameResults){
    setTimeout(function(){
      $('.collection-info').prepend(JST.game(gameResults.toJSON()));
    }, 1000);
  }

});
