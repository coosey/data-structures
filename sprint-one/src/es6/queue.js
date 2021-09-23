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

  }

  size() {

  }

}
