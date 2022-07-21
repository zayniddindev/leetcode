const itr: any = {1: "I",4: "IV",5: "V",9: "IX",10: "X",40: "XL",50: "L",90: "XC",100: "C",400: "CD",500: "D",900: "CM",1000: "M"};
  function intToRoman(num: number): string {
    let res = "";
    for (let i = 0; i < num.toString().length; i++) {
      const n: any = num.toString().charAt(i), pow = 10 ** (num.toString().length - i - 1);
      if (itr[pow]) {
        if (n < 4) res += itr[pow].repeat(n);
        else if (n == 4 || n == 5 || n == 9) res += itr[pow * n];
        else res += itr[pow * 5] + itr[pow].repeat(n - 5);
      }
    } return res;
}

console.log(intToRoman(1994)); //MCCXXXIV
