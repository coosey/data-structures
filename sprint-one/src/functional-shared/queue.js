var Queue = function() {
  var instances = {};
  //create count, newCount, and a container in instances
  instances.count = 0;
  instances.newCount = 0;
  instances.container = {};
  //use _.extend()
  _.extend(instances, queueMethods);
  //return instances
  return instances;
};

var queueMethods = {
  enqueue: function(value) {
    this.container[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    var toBeRemoved = this.container[this.newCount];
    if (this.count > this.newCount) {
      delete this.container[this.newCount];
      this.newCount++;
      return toBeRemoved;
    }
  },

  size: function() {
    return Object.values(this.container).length;
  }
};
