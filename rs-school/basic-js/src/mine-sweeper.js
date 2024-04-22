const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  let count = 0;
  let result = Array.from(Array(N), () => new Array(M));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      count = 0;

      // МИНЫ РЯДОМ
      if (i > 0 && matrix[i - 1][j]) count++;
      if (i < N - 1 && matrix[i + 1][j]) count++;
      if (j > 0 && matrix[i][j - 1]) count++;
      if (j < M - 1 && matrix[i][j + 1]) count++;

      // МИНЫ ПО УГЛАМ
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) count++;
      if (i > 0 && j <= M - 1 && matrix[i - 1][j + 1]) count++;
      if (i < N - 1 && j > 0 && matrix[i + 1][j - 1]) count++;
      if (i < N - 1 && j < M - 1 && matrix[i + 1][j + 1]) count++;

      result[i][j] = count;
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
