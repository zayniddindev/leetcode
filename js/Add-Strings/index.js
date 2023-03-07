/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const n1 = num1.split("").reverse();
  const n2 = num2.split("").reverse();
  const l = n1.length > n2.length ? n1.length : n2.length;
  let reminder = 0;
  let result = "";
  for (let i = 0; i < l; i++) {
    // console.log(n1[i], n2[i]);
    const sum = +(n1[i] || "0") + +(n2[i] || "0") + reminder;
    // console.log("Sum: ", sum);
    if (sum <= 9) {
      result += sum;
      reminder = 0;
    } else {
      result += sum % 10;
      reminder = Math.floor(sum / 10);
    }
    // console.log("R: ", reminder, "Res: ", result);
  }

  return reminder > 0
    ? "" + reminder + result.split("").reverse().join("")
    : result.split("").reverse().join("");
};

console.log(addStrings("44", "77"));
console.log(addStrings("9333852702227987", "85731737104263"));

//__//9333852702227987
// +
//__//  85731737104263
// ___________________
//__//9419584439332250
