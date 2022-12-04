/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let nums = [null, ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'], res = '';
  while (columnNumber > 26) {
    res += nums[columnNumber % 26];
    columnNumber 
  }
  return res
};

console.log(convertToTitle(1));
console.log(convertToTitle(2));
console.log(convertToTitle(11));
console.log(convertToTitle(27));
console.log(convertToTitle(111));

/**
 * 1 - A
 *
 * 26 - Z
 * 27 - AA
 *
 */

/**
 * 27 -> AA
 * 52 -> AZ
 * 53 => BA
 */

// A * 26 ^ n + B * 26 ^ n-1 + C