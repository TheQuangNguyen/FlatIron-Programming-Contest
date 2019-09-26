const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function compute(lines) {
  console.log(lines);
}

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => compute(lines));