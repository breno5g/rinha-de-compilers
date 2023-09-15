const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Greater than", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should return true with 2 and 1", () => {
    const input = fs.readFileSync("tests/cases/gt/gt.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return false with 1 and 2", () => {
    const input = fs.readFileSync("tests/cases/gt/gt2.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
