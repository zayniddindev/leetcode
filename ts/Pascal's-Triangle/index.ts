function generate(n: number): number[][] {
  let numRows: number[][] = [[1]];
  for (let i = 1; i < n; i++) numRows.push(formArray(numRows[i - 1]));
  return numRows;
}
function formArray(arr: number[]): number[] {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) newArr.push(arr[i] + arr[i + 1]);
  newArr.unshift(1); newArr.push(1);
  return newArr;
}
console.log(generate(3));
//[[1], [1, 1]], [1, 2, 1]
