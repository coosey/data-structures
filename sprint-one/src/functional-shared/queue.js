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

  },

  dequeue: function() {

  },

  size: function() {

  }
};
