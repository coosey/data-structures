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
    this.container[this.count] = this.value;
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


