const RIGHT = [1, 0];
const LEFT = [-1, 0];
const TOP = [0, -1];
const BOTTOM = [0, 1];
const LEFT_TOP = [-1, -1];
const RIGHT_TOP = [1, -1];
const LEFT_BOTTOM = [1, 1];
const RIGHT_BOTTOM = [-1, 1];

const DIRECTIONS = [
  RIGHT,
  LEFT,
  TOP,
  BOTTOM,
  LEFT_TOP,
  RIGHT_TOP,
  LEFT_BOTTOM,
  RIGHT_BOTTOM,
];

export function findWords(matrix, word) {
  return DIRECTIONS.map(findDirection(matrix, word));
}

const findDirection = (vectorFinderDirection) => (matrix, word) => {
  const instance = [];
  const rows = matrix[0].length;
  const cols = matrix.length;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const find = this.findFrom(x, y, vectorFinderDirection, word);
      if (find) {
        instance.push(find);
      }
    }
  }

  return instance;
};

export function findFrom(x, y, vectorFinderDirection, word) {
  const instance = [];

  if (this.matrix[y][x] !== word[0]) {
    return null;
  }

  let wordPos = 0;
  let isFinded = true;
  let posX = x;
  let posY = y;

  while(isFinded && wordPos < word.length) {
    instance.push({x: posX, y: posY});

    wordPos++;

    if (wordPos === word.length) {
      return instance;
    }

    posX += vectorFinderDirection[0];
    posY += vectorFinderDirection[1];
      
    if (!this.matrix[posY]) {
      return null;
    }
      
    if (word[wordPos] !== this.matrix[posY][posX]) {
      isFinded = false;
    }
  }

  return null;
}
  