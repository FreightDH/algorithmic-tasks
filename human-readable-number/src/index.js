module.exports = function toReadable(number) {
  let result = '';
  const units = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ];
  const tens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
  if (number === 0) {
    result = 'zero';
  } else if (number < 20) {
    result = units[number];
  } else if (number >= 20 && number < 100) {
    number = number.toString().split('');
    result = tens[number[0]] + units[number[1]];
  } else {
    number = number.toString().split('');
    result = units[number[0]] + 'hundred ';
    number[1] === 0
      ? (result += number[1] + ' ' + units[number[2]])
      : number[1] === '1'
        ? (result += units[+(number[1] + number[2])])
        : (result += tens[number[1]] + units[number[2]]);
  }
  return result.trim();
};
