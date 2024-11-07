/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  const closest = {
    triple: undefined,
    diff: undefined,
  };

  for (let x = 0; x < nums.length; x++) {
    const a = nums[x];
    for (let y = x + 1; y < nums.length; y++) {
      const b = nums[y];
      for (let z = y + 1; z < nums.length; z++) {
        const c = nums[z];
        const sum = a + b + c;
        const diff = target - sum;
        if (diff == 0) return sum;
        if (
          !closest.diff ||
          Math.abs(closest.diff) > Math.abs(diff)
        ) {
          closest.diff = diff;
          closest.triple = [a, b, c].join("|");
        }
      }
    }
  }

  return closest.triple
    .split("|")
    .map(Number)
    .reduce((a, b) => a + b);
}

// console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
// console.log(threeSumClosest([0, 0, 0], 1)); // 0
// console.log(threeSumClosest([1, 1, 1, 0], -100)); // 0
console.log(
  threeSumClosest(
    [
      -13, 592, -501, 770, -952, -675, 322, -829, -246, 657,
      608, 485, -112, 967, -30, 182, -969, 559, -286, -64,
      24, 365, -158, 701, 535, -429, -217, 28, 948, -114,
      -536, -711, 693, 23, -958, -283, -700, -672, 311, 314,
      -712, -594, -351, 658, 747, 949, 70, 888, 166, 495,
      244, -380, -654, 454, -281, -811, -168, -839, -106,
      877, -216, 523, -234, -8, 289, -175, 920, -237, -791,
      -976, -509, -4, -3, 298, -190, 194, -328, 265, 150,
      210, 285, -176, -646, -465, -97, -107, 668, 892, 612,
      -54, -272, -910, 557, -212, -930, -198, 38, -365,
      -729, -410, 932, 4, -565, -329, -456, 224, 443, -529,
      -428, -294, 191, 229, 112, -867, -163, -979, 236,
      -227, -388, -209, 984, 188, -549, 970, 951, -119,
      -146, 801, -554, 564, -769, 334, -819, -356, -724,
      -219, 527, -405, -27, -759, 722, -774, 758, 394, 146,
      517, 870, -208, 742, -782, 336, -364, -558, -417, 663,
      -914, 536, 293, -818, 847, -322, 408, 876, -823, 827,
      167,
    ],
    7175
  )
); // -2
