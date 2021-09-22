var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    //if our count is > 0, decrement
    if (count > 0) {
      count--;
    }
    return storage[count];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
