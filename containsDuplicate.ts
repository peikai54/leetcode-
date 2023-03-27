// leetcode链接：https://leetcode.cn/problems/contains-duplicate/?envType=study-plan&id=shu-ju-jie-gou-ru-men&plan=data-structures&plan_progress=xxyrdfst

function containsDuplicate(nums: number[]): boolean {
  const map: Map<number, boolean> = new Map();
  let result: boolean = false;

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === true) {
      result = true;
      break;
    }
    map.set(nums[i], true);
  }
  return result;
}

console.log(containsDuplicate([1, 2, 3, 4]));
