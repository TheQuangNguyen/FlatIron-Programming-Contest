const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function duckTyping(lines) {
  letters = "abcdefghijklmnopqrstuvwxyz";
  index = 0;
  result = "";
  for (i = 0; i < lines.length; i++) {
    currentLine = lines[i];
    currentLine = currentLine.split(" ");
    currentLine.forEach(word => {
      if (word === "qwak") {
        index++;
      } else if (word === "quack") {
        index--;
      } else if (word === "qwuack") {
        result += letters.charAt(index);
      }
    });
  }

  console.log(result);
}

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => duckTyping(lines));