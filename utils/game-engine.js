import _ from 'lodash';

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
  return _.chain(DIRECTIONS)
    .map(findDirection(matrix, word))
    .flattenDeep()
    .uniqBy(c => ([c.x, c.y].join()))
    .value();
}

const findDirection = (matrix, word) => (vectorFinderDirection) =>{
  const instance = [];
  const cols = matrix[0].length;
  const rows = matrix.length;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const find = findFrom(x, y, vectorFinderDirection, word, matrix);
      if (find) {
        instance.push(find);
      }
    }
  }

  return instance;
};

export function findFrom(x, y, vectorFinderDirection, word, matrix) {
  const instance = [];
  
  if (matrix[y][x] !== word[0]) {
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
      
    if (!matrix[posY]) {
      return null;
    }
      
    if (word[wordPos] !== matrix[posY][posX]) {
      isFinded = false;
    }
  }

  return null;
}
  