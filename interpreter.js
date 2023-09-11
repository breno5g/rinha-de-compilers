function interpret(node, environment) {
  switch (node.kind) {
    case "Let": {
      return interpret(node.next, {
        ...environment,
        [node.name.text]: node.value,
      });
    }
    case "Var": {
      if (node.text in environment) {
        return environment[node.text];
      } else {
        throw new Error(`Undefined variable: ${node.name.text}`);
      }
    }
    case "Function": {
      return node;
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
      const args = node.arguments.map((arg) => interpret(arg, environment));
      if (typeof callee === "function") {
        return callee(...args);
      } else {
        console.dir(callee, { depth: null });
        throw new Error("Invalid Call: " + node.callee.text);
      }
    }
    case "Binary": {
      const rhs = interpret(node.rhs, environment);
      const lhs = interpret(node.lhs, environment);

      switch (node.op) {
        case "Add": {
          return lhs + rhs;
        }
        case "Sub": {
          return lhs - rhs;
        }
        case "Mul": {
          return lhs * rhs;
        }
        case "Div": {
          return lhs / rhs;
        }
        case "Eq": {
          return lhs === rhs;
        }
        case "Neq": {
          return lhs !== rhs;
        }
        case "Lt": {
          return lhs < rhs;
        }
        case "Gt": {
          return lhs > rhs;
        }
        case "Lte": {
          return lhs <= rhs;
        }
        case "Gte": {
          return lhs >= rhs;
        }
        case "And": {
          return lhs && rhs;
        }
        case "Or": {
          return lhs || rhs;
        }
        default: {
          throw new Error(`Unexpected binary operator: ${node.op}`);
        }
      }
    }
    case "Str": {
      return node.value;
    }
    case "Int": {
      return node.value;
    }
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
