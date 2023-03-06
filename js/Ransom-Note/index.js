/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let a = {};
  let b = {};
  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    if (a[letter]) a[letter]++;
    else a[letter] = 1;
  }
  for (let j = 0; j < magazine.length; j++) {
    const letter = magazine[j];
    if (b[letter]) b[letter]++;
    else b[letter] = 1;
  }
  console.log(a, b);
  for (const letter in a) {
    if (!b[letter]) return false;
    if (a[letter] > b[letter]) return false;
  }

  return true;
};

console.log(canConstruct("aa", "ab"));
