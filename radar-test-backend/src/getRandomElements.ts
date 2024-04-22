/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 *
 * Примечание: если array.length < numOfItems возвращаем
 * array.length случайных элементов.
 *
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */
function getRandomElements(array: string[], numOfItems: number): string[] {
  const result: string[] = [];
  const uniqueArray = Array.from(new Set(array));

  if (numOfItems > uniqueArray.length) {
    numOfItems = uniqueArray.length;
  }

  for (let i = 0; i < numOfItems; i++) {
    let element: string;
    let randomIndex: number;

    do {
      randomIndex = getRandomNumber(0, uniqueArray.length - 1);
      element = uniqueArray[randomIndex];
    } while (result.includes(element));

    uniqueArray.splice(randomIndex, 1);
    result.push(element);
  }

  return result;
}

// Генерация случайного числа, влючая min и max
const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomElements;
