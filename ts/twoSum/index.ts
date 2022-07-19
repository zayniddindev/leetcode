function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (map.has(nums[i])) return [map.get(nums[i]), i];
    else map.set(remain, i);
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));
