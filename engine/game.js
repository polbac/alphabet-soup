const WORD = 'OIE';

export default class Game{
  constructor(matrix) {
    this.matrix = [
      ...matrix.map(row => {
        return row.map(letter => [letter, false]);
      })];
  }

  findWord() {
    const letters = [...this.matrix];

    var s = this.search(WORD, letters);

    if (s != -1) {
      var startAt = s[0];
      var direct = s[1];
      var len = s[2];
      for (var i = 0; i < len; i++) {
        letters[startAt[0] + i * direct[0]][startAt[1] + i * direct[1]][
          1
        ] = true;
      }
    }
    
    return letters;
  }

  search(string, matrix) {
    var allD = [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1]
    ];
    var length = string.length;
    var rows = matrix.length;
    var cols = matrix[0].length;
  
    string = string.toUpperCase();
  
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if (string[0] == matrix[i][j][0]) {
          for (var k = 0; k < 8; k++) {
            if (
              i + allD[k][0] * length >= 0 &&
              i + allD[k][0] * length <= rows &&
              j + allD[k][1] * length >= 0 &&
              j + allD[k][1] * length <= cols
            ) {
              var chars = '';
              for (var l = 0; l < length; l++) {
                chars += matrix[i + allD[k][0] * l][j + allD[k][1] * l][0];
              }
              if (chars == string.toUpperCase()) {
                return [[i, j], allD[k], length];
              }
            }
          }
        }
      }
    }
    return -1;
  }
  
}