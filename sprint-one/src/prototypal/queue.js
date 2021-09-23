var Queue = function() {
  var instances = Object.create(queueMethods);

  instances.container = {};
  instances.count = 0;
  instances.newCount = 0;

  return instances;
};

var queueMethods = {

  enqueue: function(value) {
    this.container[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    if (this.count > this.newCount) {
      this.count--;
      var toBeRemoved = this.container[this.count];
      delete this.container[this.count];
      return toBeRemoved;
    }
  },

  size: function() {
    return Object.values(this.container).length;
  }
};


