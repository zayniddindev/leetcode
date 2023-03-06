/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    if (letter == s[0]) s = s.substring(1);
  }

  return s.length == 0;
};

console.log(isSubsequence("abc", "ahbdc"));
