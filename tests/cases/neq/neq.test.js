const interpreter = require('../../../interpreter');
const fs = require('fs');

describe('neq', () => {
  beforeEach(() => {
    console.log = jest.fn();
  })

  it('should 1 not equal 2', () => {
    const input = fs.readFileSync('./tests/cases/neq/neq.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  })

  it('should "1" not equal 1', () => {
    const input = fs.readFileSync('./tests/cases/neq/neq2.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(true);
  })

  it('should return false with hello and hello', () => {
    const input = fs.readFileSync('./tests/cases/neq/neq3.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  })

  it('should return false with world and world', () => {
    const input = fs.readFileSync('./tests/cases/neq/neq4.json', 'utf8');
    const ast = JSON.parse(input);

    interpreter(ast.expression, {});
    expect(console.log).toHaveBeenCalledWith(false);
  })
});
