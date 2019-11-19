const { assert } = require("chai");
const { describe, it } = require("mocha");

const shuffle = require("./shuffle");

describe("shuffle(array, seed)", () => {
  it("scrambles the supplied array", () => {
    const initial = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [3, 4, 8, 5, 1, 7, 6, 2];
    const seed = "scramble";

    const result = shuffle(initial, seed);

    assert.deepEqual(result, expected);
  });

  it("falls back to autoseeding if no seed is supplied", () => {
    const initial = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = shuffle(initial);

    assert.notDeepEqual(result, initial);
  });
});
