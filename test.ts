import { solve_board } from "./solveBoard";

const board = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
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
