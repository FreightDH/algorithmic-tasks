const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let i = 0;
	let result = arr.map(element => element === -1 ? -1 : '');
	let tempArray = arr.filter(element => element > 0).sort((a, b) => a - b);

	return result.map(element => element !== -1 ? tempArray[i++] : -1);
}

module.exports = {
  sortByHeight
};
