const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Greater than or equal to", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should return true with 2 and 1", () => {
    const input = fs.readFileSync("tests/cases/gte/gte.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return true with 2 and 2", () => {
    const input = fs.readFileSync("tests/cases/gte/gte2.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return false with 1 and 2", () => {
    const input = fs.readFileSync("tests/cases/gte/gte3.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
