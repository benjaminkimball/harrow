const seedrandom = require("seedrandom");

module.exports = (array, seed) => {
  const random = seedrandom(seed);

  const scratch = array.slice(0);
  const result = Array(array.length);

  let srcIndex = array.length;
  let destIndex = 0;

  while (srcIndex) {
    const randomIndex = Math.floor(srcIndex * random());
    result[destIndex++] = scratch[randomIndex];
    scratch[randomIndex] = scratch[--srcIndex];
  }

  return result;
};
