// @param {number[]} nums
// @return {number}

const removeDuplicates = function(nums) {
    let len = 0;
    for(i=0; i<nums.length; i += 1) {
      if (nums[i] !== nums[i+1]){
        len += 1;
        if (nums[i+1] != undefined) nums[len] = nums[i+1];
      }
    }
    return len;
};
