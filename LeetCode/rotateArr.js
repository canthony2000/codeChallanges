// @param {number[]} nums
// @param {number} k
// @return {void} Do not return anything, modify nums in-place instead.

const rotate = function(nums, k) {
    const endArr = nums.splice(nums.length - k, nums.length);
    nums.unshift(...endArr)
    return nums;
};

const rotate2 = function(nums, k) {
  let cell = 0;
  for (l = 0; l < k; l += 1) {
    cell = nums[nums.length - 1];
    for (i = nums.length - 1; i > 0 ; i -= 1) {
      nums[i] = nums[i-1];
    }
    nums[0] = cell;
  }
  return nums;
};
