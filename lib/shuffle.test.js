const shuffle = require("./shuffle");

describe("shuffle(array, seed)", () => {
  it("scrambles the supplied array", () => {
    expect.assertions(1);

    const initial = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [3, 4, 8, 5, 1, 7, 6, 2];
    const seed = "scramble";

    const result = shuffle(initial, seed);

    expect(result).toStrictEqual(expected);
  });

  it("falls back to autoseeding if no seed is supplied", () => {
    expect.assertions(1);

    const initial = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = shuffle(initial);

    // I'll eat my hat when the initial array is the result of the shuffling!
    expect(result).not.toStrictEqual(initial);
  });
});
