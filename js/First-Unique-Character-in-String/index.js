/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let letters = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (letters[letter]) letters[letter].count++;
    else letters[letter] = { count: 1, pos: i };
  }

  let data = [];
  for (const l in letters) {
    const element = letters[l];
    data.push(element);
  }

  data.sort((a, b) => a.count - b.count);

  const expected = data[0];

  return expected.count == 1 ? expected.pos : -1;
};

console.log(firstUniqChar("loveleetcode")); //2
console.log(firstUniqChar("leetcode")); //2
