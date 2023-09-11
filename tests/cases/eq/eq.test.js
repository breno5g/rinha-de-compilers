const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Equal", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("Should 1 === 1 and return true", () => {
    const input = fs.readFileSync("./tests/cases/eq/eq.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("Should 1 === 2 and return false", () => {
    const input = fs.readFileSync("./tests/cases/eq/eq2.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });

  it('Should "hello" === "hello" and return true', () => {
    const input = fs.readFileSync("./tests/cases/eq/eq3.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it('Should "hello" === "world" and return false', () => {
    const input = fs.readFileSync("./tests/cases/eq/eq4.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
