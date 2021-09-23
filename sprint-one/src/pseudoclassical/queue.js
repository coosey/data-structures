var Queue = function() {
  this.count = 0;
  this.newCount = 0;
  this.container = {};
};

Queue.prototype.enqueue = function(value) {
  this.container[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > this.newCount) {
    var toBeRemoved = this.container[this.newCount];
    delete this.container[this.newCount];
    this.newCount++;
    return toBeRemoved;
  }
};

Queue.prototype.size = function() {
  return Object.values(this.container).length;
};


