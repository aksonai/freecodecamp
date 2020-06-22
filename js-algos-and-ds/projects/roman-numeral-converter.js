/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

  const numerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  let romanized = '';
  const decimalKeys = Object.keys(numerals).reverse();

  decimalKeys.forEach(decimal => {
    while (decimal <= num) {
      romanized += numerals[decimal];
      num -= decimal;
    }
  });

  return romanized;
}

console.log(convertToRoman(36));
