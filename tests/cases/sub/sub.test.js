const interpreter = require("../../../interpreter");
const fs = require("fs");

describe("Sub tests", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  describe("Success cases", () => {
    it("Should sub 231 - 25", () => {
      const data = fs.readFileSync("tests/cases/sub/sub.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log.mock.calls[0][0]).toBe(206);
    });

    it("Should sub 32131 - 3213", () => {
      const data = fs.readFileSync("tests/cases/sub/sub2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log.mock.calls[0][0]).toBe(28918);
    });
  });

  describe("Fail cases", () => {
    it("Should sub 231 - 25", () => {
      const data = fs.readFileSync("tests/cases/sub/sub.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log.mock.calls[0][0]).not.toBe(0);
    });

    it("Should sub 32131 - 3213", () => {
      const data = fs.readFileSync("tests/cases/sub/sub2.json", "utf8");
      const ast = JSON.parse(data);

      interpreter(ast.expression, {});

      expect(console.log.mock.calls[0][0]).not.toBe(0);
    });
  });
});
