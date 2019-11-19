const { alea } = require("seedrandom");

module.exports = function shuffle(deck, seed) {
  const rng = alea(seed);

  const clone = deck.slice(0);
  const shuffled = Array(deck.length);

  let srcIndex = deck.length;
  let destIndex = 0;

  while (srcIndex) {
    const randomIndex = (srcIndex * rng()) | 0;
    shuffled[destIndex++] = clone[randomIndex];
    clone[randomIndex] = clone[--srcIndex];
  }

  return shuffled;
};
