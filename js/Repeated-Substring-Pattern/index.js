/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2) + 1; i++) {
    if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s) return true;
  }
  return false;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("abc"));
console.log(repeatedSubstringPattern("ababbd"));
console.log(repeatedSubstringPattern("absabsabs"));
