const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let nArr = n.toString().split('');
	let length = nArr.length;
	let result = 0;

	for (let i = 0; i < length; i++) {
		let tempArr = [].concat(nArr);
		tempArr.splice(i, 1);

		result = Math.max(result, +tempArr.join(''));
	} 

	return result;
}

module.exports = {
  deleteDigit
};
