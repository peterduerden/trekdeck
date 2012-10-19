var card = require('./card');
var cardList = [];

for (var i=0; i<=8; i++) {
  cardList.push(card.cards()[i]);
}

exports.index = function(req, res){
  res.render('index', { title: 'TrekDeck', cards: cardList });
};