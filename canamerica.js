const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function canamerica(lines) {
  LiterToGallon = lines[0] * 3.78541;
  AmericaToCanadian = LiterToGallon * 0.75;

  if (AmericaToCanadian < lines[1]) {
    times = AmericaToCanadian / lines[1];
    console.log(`Canadian gas is ${times} times cheaper`);
  } else if (AmericaToCanadian > lines[1]) {
    times = lines[1] / AmericaToCanadian;
    console.log(`American gas is ${times} times cheaper`);
  }
}

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => canamerica(lines));