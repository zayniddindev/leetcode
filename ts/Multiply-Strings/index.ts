function multiply(num1: string, num2: string): any {
  let n11 = num1.substring(0, num1.length / 2 ),
    n12 = num1.substring(num1.length / 2 ),
    n21 = num2.substring(0, num1.length / 2 ),
    n22 = num2.substring(num1.length / 2 );
console.log(Number(n11)* Number(n21), n21, n22);

  return Number(n11) * Number(n21) ;
}

console.log(multiply("1234", "4321"));

/**
 * (1200 + 34) * (4300 + 21) =
 * 12 * 43.0000 + 12 * 21.00 + 34 * 43.00 + 34*21
 */

    console.log(12345678909876541n + 12345678909876541n);
