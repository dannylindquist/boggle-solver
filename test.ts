import { solve_board } from "./solveBoard";

const board = [
  "D",
  "L",
  "A",
  "I",
  "S",
  "E",
  "M",
  "K",
  "O",
  "U",
  "E",
  "T",
  "N",
  "A",
  "W",
  "A",
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
