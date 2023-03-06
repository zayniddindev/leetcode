/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let a = {};
  let b = {};
  for (let i = 0; i < t.length; i++) {
    const letterS = s[i];
    const letterT = t[i];
    if (letterS) {
      if (a[letterS]) a[letterS]++;
      else a[letterS] = 1;
    }

    if (letterT) {
      if (b[letterT]) b[letterT]++;
      else b[letterT] = 1;
    }
  }
  for (const letter in b) {
    if (!a[letter]) return letter;
    if (b[letter] > a[letter]) return letter;
  }

  return "error";
};

console.log(findTheDifference("asa", "asab")); //b
