// leetcode链接：https://leetcode.cn/problems/min-stack-lcci/

class MinStack {
  stack: number[] = [];
  minArr: number[] = this.stack;

  constructor() {}

  push(x: number): void {
    this.stack.push(x);
    if (this.minArr?.length === 0) {
      this.minArr?.unshift(x);
    }
    if (x < this.minArr?.[0]) {
      this.minArr?.unshift(x);
    }
  }

  pop(): void {
    if (this.stack?.[this.stack?.length - 1] === this.minArr?.[0]) {
      this.minArr.shift();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack?.[this.stack?.length - 1];
  }

  getMin(): number {
    return this.minArr?.[0];
  }
}
