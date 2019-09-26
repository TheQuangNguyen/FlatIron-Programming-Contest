const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function knockknock(lines) {
  result = `Knock knock.
  Who's there?
  ${lines[0]}.
  ${lines[0]} who?
  ${lines[1]}`;
  console.log(result);
}

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => knockknock(lines));