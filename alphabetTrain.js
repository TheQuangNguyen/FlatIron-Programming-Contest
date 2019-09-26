const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function alphabetTrain(lines) {
  letters = "abcdefghijklmnopqrstuvwxyz";
  letterTable = {};
  lines.forEach(line => {
    const letter = line.charAt(0);
    for (let index = 1; index < line.length; index++) {
      if (letter === line.charAt(1)) {
        if (letterTable.hasOwnProperty(line)) {
          letterTable[letter] = letterTable[letter]++;
        } else {
          letterTable[letter] = 1;
        }
      }
      letter = line.charAt(index);
    }
  });

  console.log(result);
}

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => alphabetTrain(lines));