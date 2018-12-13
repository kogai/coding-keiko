const fs = require("fs");
const { ocr } = require("./");

describe("ocr", () => {
  const files = fs
    .readdirSync("./ocr/fixtures")
    .map(file => fs.readFileSync(`./ocr/fixtures/${file}`))
    .map(x => x.toString());

  it("", () => {
    const expects = [
      "000000000",
      "111111111",
      "123456789",
      "222222222",
      "333333333",
      "444444444",
      "555555555",
      "666666666",
      "777777777",
      "888888888",
      "999999999"
    ];
    files.forEach((file, i) => {
      expect(ocr(file)).toBe(expects[i]);
    });
  });
});
