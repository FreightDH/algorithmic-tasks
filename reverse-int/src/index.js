module.exports = function reverse(n) {
  n = Math.abs(n);

  if (n % 10 === 0) {
    n /= 10;
  }

  return n.toString().split('').reverse().join('');
};
