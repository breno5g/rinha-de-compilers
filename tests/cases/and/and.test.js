const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("And", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should return true with true and true", () => {
    const input = fs.readFileSync("tests/cases/and/and.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should return false with true and false", () => {
    const input = fs.readFileSync("tests/cases/and/and2.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });

  it("should return false with false and true", () => {
    const input = fs.readFileSync("tests/cases/and/and3.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });

  it("should return false with false and false", () => {
    const input = fs.readFileSync("tests/cases/and/and4.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
