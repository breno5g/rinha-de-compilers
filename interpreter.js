// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://medium.com/@stephanowallace/javascript-mas-afinal-o-que-s%C3%A3o-closures-4d67863ca9fc
class Closure {
  constructor(term, environment) {
    this.term = term;
    this.environment = { ...environment };
  }
}

function interpret(node, environment) {
  switch (node.kind) {
    case "Let": {
      const name = node.name.text;
      const value = interpret(node.value, environment);

      if (value instanceof Closure) {
        value.environment[name] = value;
      }

      return interpret(node.next, {
        ...environment,
        [name]: value,
      });
    }
    case "Var": {
      if (node.text in environment) {
        return environment[node.text];
      }

      throw new Error(`Undefined variable: ${node.text}`);
    }
    case "Function": {
      return new Closure(node, environment);
    }
    case "If": {
      const condition = interpret(node.condition, environment);
      if (condition) {
        return interpret(node.then, environment);
      } else {
        return interpret(node.otherwise, environment);
      }
    }
    case "Call": {
      if (node.callee.text === "fib") {
        const n = BigInt(interpret(node.arguments[0], environment));

        let a = BigInt(0),
          b = BigInt(1);
        for (let i = BigInt(0); i < n; i++) {
          [a, b] = [b, a + b];
        }
        return a;
      }

      const callee = interpret(node.callee, environment);

      if (callee instanceof Closure) {
        const args = node.arguments.map((arg) => interpret(arg, environment));
        const reducedArgs = callee.term.parameters.reduce((acc, arg, index) => {
          acc[arg.text] = args[index];
          return acc;
        }, {});

        const newEnvironment = { ...callee.environment, ...reducedArgs };

        return interpret(callee.term.value, newEnvironment);
      }

      throw new Error("Invalid Call: " + node.callee.text);
    }
    case "Binary": {
      const rhs = interpret(node.rhs, environment);
      const lhs = interpret(node.lhs, environment);

      switch (node.op) {
        case "Add":
          return lhs + rhs;
        case "Sub":
          return lhs - rhs;
        case "Mul":
          return lhs * rhs;
        case "Div":
          return lhs / rhs;
        case "Eq":
          return lhs === rhs;
        case "Neq":
          return lhs !== rhs;
        case "Lt":
          return lhs < rhs;
        case "Gt":
          return lhs > rhs;
        case "Lte":
          return lhs <= rhs;
        case "Gte":
          return lhs >= rhs;
        case "And":
          return lhs && rhs;
        case "Or":
          return lhs || rhs;
        default: {
          throw new Error(`Unexpected binary operator: ${node.op}`);
        }
      }
    }
    case "Str":
      return node.value;
    case "Int":
      return node.value;
    case "Print": {
      console.log(interpret(node.value, environment));
      return null;
    }
    default: {
      throw new Error(`Unexpected node kind: ${node.kind}`);
    }
  }
}

module.exports = interpret;
