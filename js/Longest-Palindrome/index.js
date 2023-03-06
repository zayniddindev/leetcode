/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let letters = {};
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letters[letter]) letters[letter]++;
    else letters[letter] = 1;
  }

  console.log(letters);
  let allEvensCount = 0;
  let isOneExist = 0;
  for (const l in letters) {
    const count = letters[l];
    console.log(count);
    if (count == 1 || !isEven(count)) isOneExist = 1;
    if (count > 1) {
      console.log(isEven(count));
      allEvensCount += isEven(count) ? count : count - 1;
    }
  }

  console.log(allEvensCount, isOneExist);
  return allEvensCount + isOneExist;
};

function isEven(n) {
  return n % 2 == 0 ? true : false;
}

console.log(longestPalindrome("ccc")); //dccaccd -> 7
