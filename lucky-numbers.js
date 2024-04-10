
/**
 * join numbers in array
 * 
 * @param {number[]} array 
 * @returns {number} all array numbers joined
 */
function convertArrayToNumber(array){
    let joinNumber = "";

    for (let i in array){
        joinNumber += array[i];

    }

    return Number(joinNumber)
}

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
    // return Number(array1.join('')) + Number(array2.join(''))

  return convertArrayToNumber(array1) + convertArrayToNumber(array2);

}
  
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
function luckyNumber(value) {
    // return String(value) === [...String(value)].reverse().join('')

  let numberArray = Array.from(String(value), Number);
  let isPalindrome = true;

  while (numberArray.length > 1) {
    if ( numberArray.shift() != numberArray.pop()) {
        isPalindrome = false;
        break;
    }
  }

  return isPalindrome;
}
  
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
    /*
    if (!input) {
    return 'Required field'
  }
  return Number(input) ? '' : 'Must be a number besides 0'
    */
   
    if ((typeof input === 'string' && input.length === 0) || input == null) {
        return 'Required field';

    } else if (isNaN(input) || (typeof input === 'string' && input == '0')) {
        return 'Must be a number besides 0';

    } else {
        return '';
    }
}

/*
expect(errorMessage('')).toBe('Required field');
expect(errorMessage(null)).toBe('Required field');
expect(errorMessage(undefined)).toBe('Required field');

expect(errorMessage('some text')).toBe('Must be a number besides 0');
expect(errorMessage('86f1')).toBe('Must be a number besides 0');
expect(errorMessage('4 2')).toBe('Must be a number besides 0');
expect(errorMessage('0')).toBe('Must be a number besides 0');

*/

console.log(errorMessage('0'));
