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

  },

  size: function() {

  }
};


