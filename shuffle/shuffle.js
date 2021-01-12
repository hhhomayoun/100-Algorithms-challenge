values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
suits = ['hearts', 'diamonds', 'spades', 'clubs']
deck = [];

class Card {
 constructor(suit, value) {
  this.suit = suit;
  this.value = value;
 }
}

for (let i = 0; i < suits.length; i++) {
 for (let j = 0; j < values.length; j++) {
  const card = new Card(suits[i], values[j])
  deck.push(card)
 }
}

function shuffle(min, max) {
 for (let i = 0; i < 1000; i++) {
  let j = Math.floor(Math.random() * (max - min) + min);

  deck.push(deck[j])
  deck.splice(j, 1)
 }
}

shuffle(1, 52)
console.log(deck)