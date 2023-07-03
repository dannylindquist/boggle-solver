import { RadixTree } from "./tree";

const tree = new RadixTree((await Bun.file("./words.txt").text()).split("\n"));
type Board = string[];

// left: index - 1
// right: index + 1
// top: index - 4
// bottom: index + 4

function walk_index(
  current: string,
  index: number,
  board: Board,
  possible: string[],
  hitIndicies: Set<number>
) {
  if (hitIndicies.has(index) || index < 0 || index >= 16) {
    return;
  }
  const next_step = (current += board[index].toLowerCase());
  if (next_step.length >= 3) {
    if (!tree.startsWith(next_step)) {
      return;
    }
    possible.push(next_step);
  }
  hitIndicies.add(index);
  // top left
  walk_index(next_step, index - 5, board, possible, new Set(hitIndicies));
  // top
  walk_index(next_step, index - 4, board, possible, new Set(hitIndicies));
  // top right
  walk_index(next_step, index - 3, board, possible, new Set(hitIndicies));
  // left
  walk_index(next_step, index - 1, board, possible, new Set(hitIndicies));
  // right
  walk_index(next_step, index + 1, board, possible, new Set(hitIndicies));
  // bottom left
  walk_index(next_step, index + 3, board, possible, new Set(hitIndicies));
  // bottom
  walk_index(next_step, index + 4, board, possible, new Set(hitIndicies));
  // bottom right
  walk_index(next_step, index + 5, board, possible, new Set(hitIndicies));
}

export function solve_board(board: Board) {
  const found_words = new Set<string>();
  for (let index = 0; index < 16; index++) {
    const possible_words: string[] = [];
    walk_index("", index, board, possible_words, new Set<number>());
    for (const word of possible_words) {
      if (tree.findWord(word)) {
        found_words.add(word);
      }
    }
  }
  return [...found_words].reduce((agg, val) => {
    if (agg[val.length]) {
      agg[val.length].push(val);
    } else {
      agg[val.length] = [val];
    }
    return agg;
  }, {} as Record<number, string[]>);
}
