const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const _repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
	const _separator = options.separator ? options.separator : '+'; 
	const _addition = options.addition === undefined ? '' : '' + options.addition;
	const _additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
	const _additionSeparator = options.additionSeparator ? options.additionSeparator : '|'; 

	let additionArr = [];

	for (let i = 0; i < _additionRepeatTimes; i++) {
		additionArr.push(_addition);
	}

	let result = [];

	for (let i = 0; i < _repeatTimes; i++) {
		result.push(str + additionArr.join(_additionSeparator));
	}

	return result.join(_separator);
}

repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

module.exports = {
  repeater
};
