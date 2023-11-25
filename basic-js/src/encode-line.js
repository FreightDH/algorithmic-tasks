const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	const length = str.length;
	let count = 0;
	let result = '';

	for (let i = 0; i < length; i++) {
		count = 1;
		while (str[i] === str[i + 1]) { count++; i++; }

		result += count > 1 ? count + str[i] : str[i];
	}

	return result;
}

module.exports = {
  encodeLine
};
