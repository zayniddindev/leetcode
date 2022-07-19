"use strict";
function longestCommonPrefix(strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        const currentLongest = strs[0].substring(0, i + 1);
        if (strs.every((v) => v.startsWith(currentLongest)))
            prefix = currentLongest;
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log('d'.substring(0,1));
