var Stack = function() {
  var instances = Object.create(stackMethods);

  instances.container = {};
  instances.count = 0;

  return instances;
};

var stackMethods = {

  push: function(value) {
    this.container[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      this.count--;
    }
    return this.container[this.count];
  },

  size: function() {
    return this.count;
  }
};


