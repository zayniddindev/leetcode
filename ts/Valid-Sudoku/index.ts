function isValidSudoku(board: string[][]): boolean {
  board.every((su) => {
    su = su.filter((e) => e !== ".");
    if (new Set(su).size !== su.length) return false;
  });
  for (let i = 0; i < 9; i++) {
    let arr: string[] = [];
    for (let j = 0; j < 9; j++) {
      const n = board[j][i];
      arr.push(n);
    }
    arr = arr.filter(e => e !== ".")
    if (new Set(arr).size !== arr.length) {
      console.log(arr);
      
      return false;
    }
  }
  let sudoku: string[][] = [];
  for (let i = 0; i < 3; i++) {
    const r1 = board[i * 3];
    const r2 = board[i * 3 + 1];
    const r3 = board[i * 3 + 2];
    for (let j = 0; j < 3; j++) {
      const s = [
        r1[j * 3],
        r1[j * 3 + 1],
        r1[j * 3 + 2],
        r2[j * 3],
        r2[j * 3 + 1],
        r2[j * 3 + 2],
        r3[j * 3],
        r3[j * 3 + 1],
        r3[j * 3 + 2],
      ];
      sudoku.push(s);
    }
  }
  // console.log(sudoku);

  return sudoku.every((su) => {
    su = su
      .filter((e) => e !== ".")
      .sort((a: string, b: string) => Number(b) - Number(a));
    if (su.length == 0) return true;

    return (
      Number(su[0]) < 10 &&
      Number(su[su.length - 1]) > 0 &&
      new Set(su).size == su.length
    );
  });
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],

  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],

  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));

[
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],

  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],

  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
