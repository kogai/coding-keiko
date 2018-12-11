const { convert } = require("./");

describe("roman-arabic", () => {
  it("can convert from roman to arabic", () => {
    expect(convert("V")).toBe(5);
    expect(convert("III")).toBe(3);
    expect(convert("VII")).toBe(7);
    expect(convert("IX")).toBe(9);
    expect(convert("CMXCIX")).toBe(999);
    expect(convert("MCMIII")).toBe(1903);
    expect(convert("VV")).toBe("Invalid");
    expect(convert("IL")).toBe("Invalid");
    expect(convert("IIV")).toBe("Invalid");
    // expect(convert("IIII")).toBe("Invalid");
  });
});
