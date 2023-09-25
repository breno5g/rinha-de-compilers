const fs = require("fs");
const interpreter = require("./interpreter");

function executeRinha(filePath = "./var/rinha/fib.json", environment = {}) {
  try {
    const args = process.argv.slice(2);
    if (args[0]) filePath = `${args[0]}`;
    const data = fs.readFileSync(filePath, "utf8");
    const ast = JSON.parse(data);
    return interpreter(ast.expression, environment);
  } catch (err) {
    console.log("Error when trying to execute the rinha file: ", err.message);
    return null;
  }
}

executeRinha({});
