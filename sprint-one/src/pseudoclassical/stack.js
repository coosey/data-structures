var Stack = function() {
  this.count = 0;
  this.container = {};
};

Stack.prototype.push = function(value) {
  this.container[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.count--;
  }
  return this.container[this.count];
};

Stack.prototype.size = function() {
  return this.count;
};


