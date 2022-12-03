//https://leetcode.com/problems/excel-sheet-column-number/
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let letters = {A: 1,B: 2,C: 3,D: 4,E: 5,F: 6,G: 7,H: 8,I: 9,J: 10,K: 11,L: 12,M: 13,N: 14,O: 15,P: 16,Q: 17,R: 18,S: 19,T: 20,U: 21,V: 22,W: 23,X: 24,Y: 25, Z: 26 }, res = 0;
    let cols = columnTitle.split('');
    let length = cols.length;
    for (let j = 0; j < length; j++) {
        const col = cols[j];
        const letter = letters[col];
        res += letter * Math.pow(26, length - j - 1)
    }
    return res
};

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('AZ'));
console.log(titleToNumber('BA'));
console.log(titleToNumber('BZ'));