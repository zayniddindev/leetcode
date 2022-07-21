function longestPalindrome(s: string): any {
  for (let i = 0; i < s.length; i++) {
    let f = 0, l = s.length - i;
    for (let j = 0; j < i + 1; j++) {
      const a = s.substring(f, l);
      f++; l++;
      if (isPalindrome(a)) return a;
    }
  } return ""
}
function isPalindrome(s: string, i = 0): boolean {
  return ((i = i || 0) < 0 ||i >= s.length >> 1 ||(s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i)));
}

console.log(
  longestPalindrome(
    ""
  )
);
