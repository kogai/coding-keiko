const json = require('./schema.json');
const { parser } = require('./index');

describe("sample", () => {
  it("should return error if option does not exist", () => {
    expect(() => {
      parser(json, ["--foo"])
    }).toThrow(`Option foo does not exist in schema`)
  });
  it("should not return error if option exist", () => {
    expect(() => {
      parser(json, ["--output"])
    }).not.toThrow()
  });
  it("should return structured object", () => {
    expect(parser(json, ["--output", "foo", "--entry", "bar"])).toEqual({
      output: "foo",
      entry: "bar"
    })
  });
});

