const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Or", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should return true with true or true", () => {
    const input = fs.readFileSync("tests/cases/or/or.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return true with true or false", () => {
    const input = fs.readFileSync("tests/cases/or/or2.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return true with false or true", () => {
    const input = fs.readFileSync("tests/cases/or/or3.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return false with false or false", () => {
    const input = fs.readFileSync("tests/cases/or/or4.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
