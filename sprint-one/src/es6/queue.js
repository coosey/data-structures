class Queue {
  constructor() {
    this.container = {};
    this.count = 0;
    this.newCount = 0;
  }
  enqueue(value) {
    this.container[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count > this.newCount) {
      var toBeRemoved = this.container[this.newCount];
      delete this.container[this.newCount];
      this.newCount++;
      return toBeRemoved;
    }
  }

  size() {
    return Object.values(this.container).length;
  }

}

// var queue = new Queue();
// queue.enqueue('1');
// queue.enqueue('2');
// queue.dequeue();
// queue.size();