const fs = require("fs");
const interpreter = require("./interpreter");

function executeRinha(filePath, environment = {}) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const ast = JSON.parse(data);
    return interpreter(ast.expression, environment);
  } catch (err) {
    console.log("Error when trying to execute the rinha file: ", err.message);
    return null;
  }
}

executeRinha("./var/rinha/hello.json", {});
