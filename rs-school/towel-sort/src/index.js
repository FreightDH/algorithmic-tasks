module.exports = function towelSort(matrix) {
  if (arguments.length === 0) return [];

  return matrix.reduce((result, curElement, i) => {
    curElement.sort((a, b) => (!(i % 2) ? a - b : b - a)).map((element) => result.push(element));
    return result;
  }, []);
};
