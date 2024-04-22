module.exports = function check(str, bracketsConfig) {
  let n = str.length;

  if (n % 2 !== 0) return false;

  for (let i = 0; i < n; i++) {
    bracketsConfig.forEach((bracket) => {
      bracket = bracket.join('');
      if (str.includes(bracket)) {
        str = str.replace(bracket, '');
        i = 0;
      }
    });
  }

  return str.length ? false : true;
};
