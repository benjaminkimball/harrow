const draw = require("./draw");

describe("draw(array, count)", () => {
  it("draws a number of items from the start of the supplied array", () => {
    expect.assertions(1);

    const initial = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [1, 2, 3];

    const result = draw(initial, 3);

    expect(result).toStrictEqual(expected);
  });

  it("draws the first item if no count is supplied", () => {
    expect.assertions(1);

    const initial = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [1];

    const result = draw(initial);

    expect(result).toStrictEqual(expected);
  });
});
