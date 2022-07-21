function convert(s: string, numRows: number): string {
  let base = 2 * numRows - 2, res = "", resObj: any = {};
  if(base == 0) return s; 
  for (let i = 0; i < Math.ceil(s.length / numRows); i++) {
    if (resObj[0]) resObj[0] += s.charAt(base * i);
    else resObj[0] = s.charAt(base * i);
    for (let j = 1; j < numRows - 1; j++) {
      if (resObj[j]) {
        resObj[j] += s.charAt(base * i - j);
        resObj[j] += s.charAt(base * i + j);
      } else {
        resObj[j] = s.charAt(base * i - j);
        resObj[j] += s.charAt(base * i + j);
      }
    }
    if (resObj[base / 2]) resObj[base / 2] += s.charAt(base * i + base / 2);
    else resObj[base / 2] = s.charAt(base * i + base / 2);
  }
  for (const key in resObj) res += resObj[key];
  return res;
}

console.log(convert("a", 1));

/**
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 */
