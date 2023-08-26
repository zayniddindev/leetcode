/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let gcds = [];
  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];

    if (str2.includes(letter)) {
      const index2 = str2.lastIndexOf(letter);
      let gcd = letter;

      for (let j = i; j < str1.length - i; j++) {
        console.log(str1[j], str2[index2 + j]);
        if (str1[j + 1] == str2[index2 + j + 1]) {
          gcd += str1[j + 1];
        } else {
          break;
        }
      }

      gcds.push(gcd);
    }
  }

  return gcds;
};

console.log(gcdOfStrings("ADBICKRAE", "ABCJUKBIC"));
