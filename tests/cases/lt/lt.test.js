const interpreter = require('../../../interpreter');
const fs = require('fs');

describe('Lower than', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });


  it('should return true with 1 and 2', () => {
    const input = fs.readFileSync('tests/cases/lt/lt.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  })

  it('should return true with 321321 and 321312312', () => {
    const input = fs.readFileSync('tests/cases/lt/lt2.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  })

  it('should return false with 2 and 1', () => {
    const input = fs.readFileSync('tests/cases/lt/lt3.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  })

  it('should return false with 321312312 and 321321', () => {
    const input = fs.readFileSync('tests/cases/lt/lt4.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  })
})
