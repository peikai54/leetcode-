// leetcode链接: https://leetcode.cn/problems/valid-parentheses/

function isValid(s: string): boolean {
  const leftValid = ["(", "{", "["];
  const rightValid = [")", "}", "]"];

  if (s.length % 2 !== 0) {
    return false;
  }

  const isValidData = (left1: string, right1: string) => {
    return (
      leftValid?.findIndex((el) => el === left1) ===
      rightValid?.findIndex((el) => el === right1)
    );
  };

  let stack: string[] = [];
  let isBreak = false;

  for (let char of s) {
    if (leftValid?.includes(char)) {
      stack.push(char);
      continue;
    }
    if (rightValid?.includes(char)) {
      const lastData = stack?.[stack?.length - 1];
      if (isValidData(lastData, char)) {
        stack.pop();
      } else {
        isBreak = true;
        break;
      }
    }
  }

  return stack?.length === 0 && !isBreak;
}

console.log(isValid("([}}])"));
