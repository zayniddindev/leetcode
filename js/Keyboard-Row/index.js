/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";

  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word[0].toLowerCase();
    const searchRow = firstRow.includes(firstLetter)
      ? firstRow
      : secondRow.includes(firstLetter)
      ? secondRow
      : thirdRow;

    if (
      word
        .toLowerCase()
        .split("")
        .every((l) => searchRow.includes(l))
    )
      result.push(word);
  }

  return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); //[Alaska, Dad]
console.log(findWords(["omk"])); //[]
