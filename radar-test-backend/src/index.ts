import getRandomElements from './getRandomElements';
import Table from './table';
import getArrayOfUniqueValues from './utils/getArrayOfUniqueValues';

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//*********************************************************************

const N = 100;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);

const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 5);
console.log(result);

//*********************************************************************

const table = new Table(['Name', 'Age', 'Hometown']);
table.addRow(['Max', '20', 'Yaroslavl']);
table.addRow(['Anastasia', '19', 'Nizhny Novgorod']);
table.addRow(['Tim', '20', 'Petrozavodsk']);

table.print();
