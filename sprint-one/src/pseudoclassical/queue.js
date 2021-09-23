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
  var toBeRemoved = this.container[this.count];
  if (this.count > this.newCount) {
    delete this.container[this.count];
    this.newCount++;
    return toBeRemoved;
  }
};

Queue.prototype.size = function() {
  return Object.values(this.container).length;
};


