const { normalize, calculate } = require("./index");

describe("bowling-score", () => {
  it("normal", () => {
    expect(calculate("12345123451234512345")).toEqual(60);
  });
  it.only("perfect", () => {
    expect(calculate("XXXXXXXXXXXX")).toEqual(300);
  });
  it("heartbreak", () => {
    expect(calculate("9-9-9-9-9-9-9-9-9-9-")).toEqual(90);
  });
  it("spare", () => {
    expect(calculate("5/5/5/5/5/5/5/5/5/5/5")).toEqual(150);
  });
});
