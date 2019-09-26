const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function pawn(lines) {
  input = lines[0].split(" ");
  pawn = input[0];
  bishop = input[1];

  letters = "abcdefgh";
  numbers = "12345678";

  index1 = letters.indexOf(pawn.charAt(0));
  index2 = letters.indexOf(bishop.charAt(0));
  space1 = index1 - index2;
  space2 = pawn.charAt(1) - bishop.charAt(1);

  if (space1 === space2) {
    console.log("captured");
  } else {
    console.log("safe");
  }

}

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => pawn(lines));