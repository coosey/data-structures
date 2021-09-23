var Queue = function() {
  var instances = Object.create(queueMethods);

  instances.container = {};
  instances.count = 0;
  instances.newCount = 0;

  return instances;
};

var queueMethods = {

  enqueue: function(value) {

  },

  dequeue: function() {

  },

  size: function() {

  }
};


