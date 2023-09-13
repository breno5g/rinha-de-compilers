const interpreter = require("../../../interpreter");
const fs = require("fs");

const data = require("./data");

describe("Fibonacci", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should be possible run fibonacci", () => {
    const input = fs.readFileSync("./tests/cases/fib/fib.json", "utf8");
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(data);
  });
});
