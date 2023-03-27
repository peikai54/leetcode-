// leetcode 链接： https://leetcode.cn/problems/maximum-subarray/?envType=study-plan&id=shu-ju-jie-gou-ru-men&plan=data-structures&plan_progress=xxyrdfst

function maxSubArray(nums: number[]): number {
  let minNum = nums?.[0];
  let maxNum = nums?.[0];
  nums.forEach((el) => {
    minNum = Math.min(el, minNum);
    maxNum = Math.max(el, maxNum);
  });

  if (maxNum < 0) {
    return maxNum;
  }

  let sum = 0;
  let tempMax = maxNum;

  nums.forEach((el) => {
    sum += el;
    tempMax = Math.max(sum - el, sum, tempMax);
    if (sum < 0) {
      sum = 0;
    }
  });

  return tempMax;
}

console.log(maxSubArray([-2, 1]));
