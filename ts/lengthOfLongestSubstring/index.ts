function lengthOfLongestSubstring(s: string): any {
  if (s.length <= 1) return s.length;
  else {
    let substrs: any = [];
    for (let i = 1; i < s.length; i++) {
      let substr: string = s.charAt(i - 1);
      for (let j = i; j < s.length; j++) {
        if (![...substr].includes(s.charAt(j))) substr += s.charAt(j);
        else break;
      }
      console.log(substr);

      substrs.push(substr);
    }
    return substrs.sort((a: string, b: string) => b.length - a.length)[0].length;
  }
}

console.log(lengthOfLongestSubstring(""));
