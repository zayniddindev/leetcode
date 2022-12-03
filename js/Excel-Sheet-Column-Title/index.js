/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let start = 64;
  const count = p26(columnNumber);
  return String.fromCharCode(start + 26);
};

function p26(n) {
  let count = 0;
  while (n >= 26) {
    n -= 26;
    count++;
  }
  return [count, n];
}

console.log(p26(7474747));
console.log(convertToTitle(1));
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