const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Combination", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should be possible run combination", () => {
    const input = fs.readFileSync(
      "./tests/cases/combination/combination.json",
      "utf8"
    );
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(45);
  });
});
