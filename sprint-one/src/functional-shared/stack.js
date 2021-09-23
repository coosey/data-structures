var Stack = function() {
  var instances = {};
  //create a count & container in instances
  instances.count = 0;
  instances.container = {};
  //use extend()
  _.extend(instances, stackMethods);
  //return instances
  return instances;
};
//create push, pop, & size methods in stackMethods
var stackMethods = {
  push: function(value) {
    this.container[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      this.count--;
      var toBeRemoved = this.container[this.count];
      return toBeRemoved;
    }
  },

  size: function() {
    return this.count;
  }
};


