const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function pdf(lines) {

  console.log(result);
}

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => pdf(lines));