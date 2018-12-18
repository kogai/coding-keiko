const { normalize, calculate } = require("./index");

describe("bowling-score", () => {
  describe.only("normalize", () => {
    it.only("normal", () => {
      expect(normalize("12345123451234512345")).toEqual([
        [1, 2],
        [3, 4],
        [5, 1],
        [2, 3],
        [4, 5],
        [1, 2],
        [3, 4],
        [5, 1],
        [2, 3],
        [4, 5]
      ]);
    });
    it("perfect", () => {
      expect(normalize("XXXXXXXXXXXX")).toEqual([
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10]
      ]);
    });
  });
  it("normal", () => {
    expect(calculate("12345123451234512345")).toEqual(60);
  });
  it("perfect", () => {
    expect(calculate("XXXXXXXXXXXX")).toEqual(300);
  });
  it("heartbreak", () => {
    expect(calculate("9-9-9-9-9-9-9-9-9-9-")).toEqual(90);
  });
  it("spare", () => {
    expect(calculate("5/5/5/5/5/5/5/5/5/5/5")).toEqual(150);
  });
});
