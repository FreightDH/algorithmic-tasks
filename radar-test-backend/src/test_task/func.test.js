const getRandomNumber = require('./func');
const MIN = 0;
const MAX = 10;

describe('getRandomNumber function test cases', () => {
  // Проверяем вывод при одинаковых границах диапазона
  test('should return 3', () => {
    expect(getRandomNumber(3, 3)).toBe(3);
  });

  // Проверяем, что число не выходит за границы диапазона
  test('should return number which is greater than MIN and less than MAX', () => {
    const randomNumber = getRandomNumber(MIN, MAX);
    expect(randomNumber).toBeGreaterThanOrEqual(MIN);
    expect(randomNumber).toBeLessThanOrEqual(MAX);
  });

  // Проверяем, что функция не генерирует одинаковые числа
  test('should return different numbers on multiply calls', () => {
    const randomNumber1 = getRandomNumber(MIN, MAX);
    const randomNumber2 = getRandomNumber(MIN, MAX);
    expect(randomNumber1).not.toEqual(randomNumber2);
  });

  /* Помимо этого, проверить работу функции можно, вызвав ее большое количество раз 
  и построив диаграмму распределения значений. Так можно удостовериться, что генерируемые функцией 
  числа равномерно распределены в пределах диапазона. */
});
