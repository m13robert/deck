const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const suits = ["H", "C", "S", "D"];

const getDeck = () => {
  const deck = [];
  ranks.forEach((rank) => {
    suits.forEach((suit) => {
      deck.push(rank.concat(suit));
    });
  });

  return deck;
};

console.log(getDeck());
const shuffledDeck = () => {
  const deck = getDeck();

  for (i = 0; i < 1000; i++) {
    const randomLocation1 = Math.floor(Math.random() * 52);
    const randomLocation2 = Math.floor(Math.random() * 52);

    const swapHelper = deck[randomLocation1];
    deck[randomLocation1] = deck[randomLocation2];
    deck[randomLocation2] = swapHelper;
  }

  return deck;
};

const drawACard = () => {
  const deck = shuffledDeck();
  console.log(deck);

  return deck.pop();
};

console.log(drawACard());
