"use strict";
const romans = { N: 0, I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, };
function romanToInt(s) {
    let splitted = [...s], res = 0;
    for (let i = 0; i < splitted.length; i++) {
        const curr = splitted[i], next = splitted[i + 1] || 'N';
        if (romans[curr] >= romans[next])
            res += romans[curr];
        else {
            res += romans[next] - romans[curr];
            i++;
        }
    }
    return res;
}
console.log(romanToInt("M")); //1454
