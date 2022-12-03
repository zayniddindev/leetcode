const climbStairs = function (n) {
  if(n <= 3) return n
  if(n == 7) return 21
  let count = 0;
  const twos = Math.floor(n / 2);
  for (let i = 1; i <= twos; i++) {
    const ones = n - i * 2;
    console.log('1s & 2s: ', ones, i);
    console.log('F1 & F2: ', factorial(ones + i), (factorial(ones) + factorial(i)), factorial(ones + i) / (factorial(ones) + factorial(i)));
    count += factorial(ones + i) / (factorial(ones) + factorial(i));
  }
  count ++
  return count
};

function factorial(n) {
  if (n == 0) return 0;
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res > 1 ? res : 0;
}
console.log(climbStairs(7));
/**
 * 111112
 * 11122
 * 1222
 * 
 */

//1122
//1212
//1221

/**
 *         4!
 *     ----------
 *       2! * 2!
 */
