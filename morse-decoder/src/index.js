const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
	 '**********': ' ',
};

function decode(expr) {
   let result = [];
	const n = expr.length;
	
	for (let i = 0; i < n; i += 10) {
		result.push(expr.slice(i, i + 10).replaceAll('0', ' ').trimStart().replaceAll(' ', '0'))
	}

	result = result.map(letter => letter.replaceAll('10', '.').replaceAll('11', '-'));
	result = result.map(letter => MORSE_TABLE[letter]);

	return result.join('');
}

module.exports = {
    decode
}