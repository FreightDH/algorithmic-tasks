const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

// http://blog.tkachuk.su/2018/09/13/шифр-виженера-как-это-работает/
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const length = message.length;
    let index = 0;
    let result = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }
      let currentIndex = this.alphabet.indexOf(message[i]);
      let offsetIndex = this.alphabet.indexOf(key[index++ % key.length]);
      let alphabetPower = this.alphabet.length;
      result += this.alphabet[(currentIndex + offsetIndex) % alphabetPower];
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const length = message.length;
    let index = 0;
    let result = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }
      let currentIndex = this.alphabet.indexOf(message[i]);
      let offsetIndex = this.alphabet.indexOf(key[index++ % key.length]);
      let alphabetPower = this.alphabet.length;
      let symbolIndex = (currentIndex - offsetIndex) % alphabetPower;

      result += symbolIndex < 0 ? this.alphabet[symbolIndex + alphabetPower] : this.alphabet[symbolIndex];
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
