/* eslint-disable security/detect-object-injection */

const seedrandom = require("seedrandom");

module.exports = (deck, seed) => {
  const random = seedrandom(seed);

  const scratch = deck.slice(0);
  const result = Array(deck.length);

  let srcIndex = deck.length;
  let destIndex = 0;

  while (srcIndex) {
    const randomIndex = (srcIndex * random()) | 0;
    result[destIndex++] = scratch[randomIndex];
    scratch[randomIndex] = scratch[--srcIndex];
  }

  return result;
};
