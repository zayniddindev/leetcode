function maxArea(height: number[]): number {
  let max = 0;
  let arrMap: any = {};
  for (let i = 0; i < height.length; i++) {
    const num = height[i];
    if (!arrMap[num]) {
      const { l, r } = leftRight(height, num);
      const wide = r - l;
      max = num * wide >= max ? num * wide : max;
      arrMap[num] = true;
    } else continue;
  }
  return max;
}

function leftRight(arr: number[], n: number): any {
  let lr: any = { l: 1, r: 2, ls: false, rs: false };
  for (let i = 0; i < arr.length; i++) {
    if (lr.ls && lr.rs) return { l: lr.l, r: lr.r };
    if (arr[i] >= n && !lr.ls) {
      lr.l = i;
      lr.ls = true;
    }
    if (!lr.rs && arr[arr.length - i - 1] >= n) {
      lr.r = arr.length - i - 1;
      lr.rs = true;
    }
  }
  return { l: 1, r: 1 };
}

console.log(maxArea([1, 2]));
// console.log(leftRight([4, 3, 2, 1, 4], 4));
