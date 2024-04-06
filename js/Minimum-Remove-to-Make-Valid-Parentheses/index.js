// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses

/**
 * @param {string} s1
 * @return {string}
 */
const minRemoveToMakeValid = (s1) => {
  let s = s1;
  let needToRemove = [];
  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];
    if (symbol == "(") {
      const closingIndex = s.indexOf(")");
      if (closingIndex == -1 || closingIndex < i) {
        needToRemove.push(i);
        s = swap(s, i);
      } else {
        s = swap(swap(s, i), closingIndex);
      }
    }
    if (symbol == ")") {
      needToRemove.push(i);
      s = swap(s, i);
    }
  }
  needToRemove.forEach((i) => (s1 = swap(s1, i, "#")));
  return s1.replaceAll("#", "");
};

function swap(s, i, r = "_") {
  return s.substring(0, i) + r + s.substring(i + 1);
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // 'lee(t(c)o)de'
console.log(minRemoveToMakeValid("))((")); // ''
console.log(minRemoveToMakeValid("a)b(c)d")); // 'ab(c)d'
