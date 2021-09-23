class Stack {
  constructor() {
    this.count = 0;
    this.container = {};
  }

  push(value) {
    this.container[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count > 0) {
      this.count--;
    }
    return this.container[this.count];
  }

  size() {
    return this.count;
  }
}

// var stacks = new Stack();
// stacks.push('aaa');
// stacks.push('bbb');
// stacks.size();
// stacks.pop();
// stacks.size();
// stacks.pop();
// stacks.size();