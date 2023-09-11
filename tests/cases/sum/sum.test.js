const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Sum tests", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  describe("Success cases", () => {
    it("Should sum 25 + 231 numbers", () => {
      const data = fs.readFileSync("tests/cases/sum/sum.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).toHaveBeenCalledWith(256);
    });

    it("Should sum 3213 + 32131 numbers", () => {
      const data = fs.readFileSync("tests/cases/sum/sum2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).toHaveBeenCalledWith(35344);
    });
  });

  describe("Fail cases", () => {
    it("Should sum 25 + 231 numbers", () => {
      const data = fs.readFileSync("tests/cases/sum/sum.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).not.toHaveBeenCalledWith(0);
    });

    it("Should sum 3213 + 32131 numbers", () => {
      const data = fs.readFileSync("tests/cases/sum/sum2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log).not.toHaveBeenCalledWith(0);
    });
  });
});
