type MyNode<T> = Record<string, T>;
interface Node extends MyNode<Node & { word?: boolean }> {}

export class RadixTree {
  head: Node;

  constructor(word_list: string[]) {
    this.head = {};
    for (const word of word_list) {
      this.insertWord(word);
    }
  }

  insertWord(word: string) {
    let node = this.head;
    for (let index = 0; index < word.length; index++) {
      const letter = word[index];
      if (node[letter]) {
        if (index === word.length - 1) {
          node[letter].word = true;
        } else {
          node = node[letter];
        }
      } else {
        node = node[letter] = {};
        if (index === word.length - 1) {
          // @ts-ignore
          node.word = true;
        }
      }
    }
  }

  startsWith(partial: string) {
    let node = this.head;
    for (let index = 0; index < partial.length; index++) {
      const letter = partial[index];
      if (node[letter]) {
        node = node[letter];
      } else {
        return false;
      }
    }
    return true;
  }

  findWord(word: string) {
    let node = this.head;
    for (let index = 0; index < word.length; index++) {
      const letter = word[index];
      if (node[letter]) {
        node = node[letter];
      } else {
        return false;
      }
    }
    return !!node.word;
  }
}
