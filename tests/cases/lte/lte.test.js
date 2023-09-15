const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Less than or equal to", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should return true with 1 and 2", () => {
    const input = fs.readFileSync("tests/cases/lte/lte.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return true with 2 and 2", () => {
    const input = fs.readFileSync("tests/cases/lte/lte2.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return false with 2 and 1", () => {
    const input = fs.readFileSync("tests/cases/lte/lte3.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
