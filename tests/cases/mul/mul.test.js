const interpreter = require("../../../interpreter");

const fs = require("fs");

describe("Mul", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  describe("Success cases", () => {
    it("Should mul 231 * 25", () => {
      const data = fs.readFileSync("tests/cases/mul/mul.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).toHaveBeenCalledWith(5775);
    });

    it("Should mul 32131 * 3213", () => {
      const data = fs.readFileSync("tests/cases/mul/mul2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).toHaveBeenCalledWith(103236903);
    });
  });

  describe("Fail cases", () => {
    it("Should mul 231 * 25", () => {
      const data = fs.readFileSync("tests/cases/mul/mul.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).not.toHaveBeenCalledWith(0);
    });

    it("Should mul 32131 * 3213", () => {
      const data = fs.readFileSync("tests/cases/mul/mul2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).not.toHaveBeenCalledWith(0);
    });
  });
});
