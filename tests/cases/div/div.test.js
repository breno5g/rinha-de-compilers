const interpreter = require("../../../interpreter");

const fs = require("fs");

describe("Div", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("Should divide 10 by 5", () => {
    const input = fs.readFileSync("./tests/cases/div/div.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(2);
  });

  it("Should divide 10 by 2", () => {
    const input = fs.readFileSync("./tests/cases/div/div2.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(5);
  });

  it("Should divide 10 by 3", () => {
    const input = fs.readFileSync("./tests/cases/div/div3.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(3.3333333333333335);
  });

  it("Should divide 10 by 4", () => {
    const input = fs.readFileSync("./tests/cases/div/div4.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(2.5);
  });
});
