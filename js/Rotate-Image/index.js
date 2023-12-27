/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const len = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const colIndex = len - i - 1;
    for (let j = 0; j < row.length; j++) {
      const val = row[j];
      const curr = { i, j };
      const dest = { j, colIndex };
      console.log({ val: { curr: val, dest: undefined }, curr, dest });
      row[j] = { val: { curr: val, dest: undefined }, curr, dest };
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3], // 7 4 1  -> \(0, 0) -> (0, 2), (0, 1) -> (1, 2), (0, 2) -> (2, 2)
    [4, 5, 6], // 8 5 2  -> \(1, 0) -> (0, 1), (1, 1) -> (1, 1), (1, 2) -> (2, 1)
    [7, 8, 9], // 9 6 3  -> \(2, 0) -> (0, 0), (2, 1) -> (1, 0), (2, 2) -> (2, 0)
  ])
);

// console.log(
//   rotate([
//     [5, 1, 9, 11], // 15 13 2 5
//     [2, 4, 8, 10], // 14 3 4 1
//     [13, 3, 6, 7], //
//     [15, 14, 12, 16], //
//   ])
// );
