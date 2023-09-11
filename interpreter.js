function interpret(node, environment) {
  switch (node.kind) {
    case "Let": {
      return interpret(node.next, {
        ...environment,
        [node.name.text]: node.value,
      });
    }
    case "Str": {
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
