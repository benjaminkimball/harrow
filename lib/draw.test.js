const { assert } = require("chai");
const { describe, it } = require("mocha");

const draw = require("./draw");

describe("draw(array, count)", () => {
  it("draws a number of items from the start of the supplied array", () => {
    const initial = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [1, 2, 3];

    const result = draw(initial, 3);

    assert.deepEqual(result, expected);
  });

  it("draws the first item if no count is supplied", () => {
    const initial = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [1];

    const result = draw(initial);

    assert.deepEqual(result, expected);
  });
});
