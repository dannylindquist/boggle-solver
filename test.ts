import { solve_board } from "./solveBoard";

const board = [
  "S",
  "R",
  "E",
  "U",
  "E",
  "A",
  "A",
  "H",
  "V",
  "F",
  "L",
  "A",
  "S",
  "F",
  "I",
  "E",
];

let temp = "";
for (let i = 0; i < board.length; i++) {
  temp += board[i];
  if (temp.length === 4) {
    console.log(temp);
    temp = "";
  }
}
console.log(temp);

console.log(solve_board(board));
