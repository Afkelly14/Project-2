/*define players*/

let player1 = {
  name: "Player 1",
  deck: [],
};

let player2 = {
  name: "Player 2",
  deck: [],
};

/*create a card deck*/
let suits = ["Heart", "Club", "Spade", "Diamond"];
let cards = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

let deck = [];

/*array to store the cards that will be compared after they are flipped*/

let cardsInPlay = [];

//for loop to go through the deck*//

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < cards.length; j++) {
    let card = {
      suits: suits[i],
      rank: cards[j],
      value: j,
    };
    deck.push(card);
  }
}

//shuffle the deck//
function shuffle(deck) {
  for (
    var j, x, i = deck.length;
    i;
    j = Math.floor(Math.random() * i),
      x = deck[--i],
      deck[i] = deck[j],
      deck[j] = x
  );
  return deck;
}

//for loop to hand out the deck//
function splitDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    if (i < 26) {
      player1.deck.push(deck[i]);
    } else {
      player2.deck.push(deck[i]);
    }
  }
}

/*function to flip the cards to check the value*/
/*use appendChild function to add player1 cards to player2 deck*/

function compareCards() {
  let cardsInPlay = player1.deck.shift() + player2.deck.shift;
}

// function playRound() {
//   player1.deck.shift();
//   console.log;

//if player 1 card value is higher than the player 2 card value, player  1 wins
//   if (player1 % 13 > player2 % 13) {
//     //pushes current cards from each deck to the back of the player's deck
//     player2.deck.pop();
//     player1.push();
//     //removes current card from the front of each deck
//     playerHand.shift();
//     compHand.shift();
//     //update card counts and check for a winner
//     updateCount();
//     checkWin();
//   }
// }

/*function to load when the window is open*/
window.onload = shuffle(deck);
splitDeck(deck);
compareCards();
