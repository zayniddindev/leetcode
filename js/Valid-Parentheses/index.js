const peers = {"{": {type: "open",peer: "}"},"}": {type: "close",peer: "{"},"(": {type: "open",peer: ")"},")": {type: "close",peer: "("},"[": {type: "open",peer: "]"},"]": {type: "close",peer: "["}};
function isValid(s) {
  if (s.length % 2 !== 0) return false;
  let notMatch = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i);
    if (notMatch[notMatch.length - 1] == peers[curr].peer && peers[curr].type == "close" )notMatch.pop();
    else notMatch.push(curr);
  }
  return notMatch.length == 0;
}
console.log(isValid("()")); // 0 1 1 2 2 0

// console.log(isValid("()[]{}")); // 0 0 1 1 2 2
// console.log(isValid("([]){}")); // 0 1 1 0 2 2
// console.log(isValid("([{}])")); // 0 1 2 2 1 0
//([])
