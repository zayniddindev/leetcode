const peers: any = {
  "(": { type: "open", peer: ")" },
  ")": { type: "close", peer: "(" },
};
function longestValidParentheses(s: string): number {
  let notMatch = [],
    validsubs: string[] = [],
    sbt = "";
  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i);
    if (
      notMatch[notMatch.length - 1] == peers[curr].peer &&
      peers[curr].type == "close"
    ) {
      notMatch.pop();
      sbt += curr;
    }else if(notMatch.length == 0 && peers[curr].type == "close"){
        validsubs.push(sbt)
    } else {
      notMatch.push(curr);
      if (notMatch.length == 1) {
        sbt += curr;
      } else {
        sbt = sbt.substring(0, sbt.length - 1);
        validsubs.push(sbt);
        notMatch.push(curr);
        sbt = "";
      }
    }
  }
  console.log(notMatch);
  console.log(validsubs);
  console.log(sbt);
  
  return s.length - notMatch.length;
}

console.log(longestValidParentheses("()()(()"));
