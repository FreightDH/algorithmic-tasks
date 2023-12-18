const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(a) {
    let count = 1;
    let currentCount = 0;

    a.forEach((element) => {
      if (Array.isArray(element)) {
        currentCount = Math.max(this.calculateDepth(element), currentCount);
      }
    });

    return count + currentCount;
  }
}

module.exports = {
  DepthCalculator,
};
