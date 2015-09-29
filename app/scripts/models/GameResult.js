var GameResult = Backbone.Model.extend({
  idAttribute: '_id',
  
  defaults: {
    game: "N/A",
    opponent: "N/A",
    score: "N/A"
  },
});

module.exports = GameResult;
