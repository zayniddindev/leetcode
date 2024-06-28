/**
 * @param {string} s
 * @return {number}
 */
const MAX32BIT = 2 ** 31 - 1;
const MIN32BIT = -(2 ** 31);
function myAtoi(s) {
  let res = "";
  let sign = "";
  main: for (let i = 0; i < s.length; i++) {
    const l = s[i];
    if (isNumber(l)) {
      res += l;
    } else if (["-", "+"].includes(l) && !res.length) {
      if (sign) return 0;
      else sign = l;
    } else {
      if (l === " " && res.length && !!sign) {
        if (res.length || !!sign) break main;
        else continue;
      } else if (!res.length) return 0;
      else break main;
    }
  }

  res = sign == "-" ? -Number(res) : Number(res);

  return res > MAX32BIT ? MAX32BIT : res < MIN32BIT ? MIN32BIT : res;
}

/**
 *
 * @param {string} s
 */
function isNumber(s) {
  return s === " " ? false : !isNaN(+s);
}

console.log(myAtoi("42")); //42
console.log(myAtoi("  -042")); //-42
console.log(myAtoi("1337c0d3")); //1337
console.log(myAtoi("0-1")); //0
console.log(myAtoi("words and 987")); //0
console.log(myAtoi("  +0 12345")); //0
