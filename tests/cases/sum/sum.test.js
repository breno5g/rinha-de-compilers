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

      expect(console.log.mock.calls[0][0]).toBe(256);
    });

    it("Should sum 3213 + 32131 numbers", () => {
      const data = fs.readFileSync("tests/cases/sum/sum2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log.mock.calls[0][0]).toBe(35344);
    });
  });

  describe("Fail cases", () => {
    it("Should sum 25 + 231 numbers", () => {
      const data = fs.readFileSync("tests/cases/sum/sum.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log.mock.calls[0][0]).not.toBe(0);
    });

    it("Should sum 3213 + 32131 numbers", () => {
      const data = fs.readFileSync("tests/cases/sum/sum2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log.mock.calls[0][0]).not.toBe(0);
    });
  });
});
